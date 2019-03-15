import os
import requests
import random
import json
import pickle
import redis
import re
from datetime import datetime, timedelta
from key import key
from redis_password import redis_password, redis_host, redis_port
from flask import Flask, send_from_directory, request, jsonify
from clear_redis import clear_redis

app = Flask(__name__, static_url_path='/build')

epoch = datetime.utcfromtimestamp(0)

def unix_time_seconds(dt):
    return (dt - epoch).total_seconds()

def redisWrite(key, value):
    write_time = unix_time_seconds(datetime.now())
    r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
    r.set(key, value)
    r.set(key + "_time", write_time)
    print("Set key:" + key)
    return

def redisRead(key):
    r = redis.StrictRedis(host=redis_host, port=redis_port, password=redis_password, decode_responses=True)
    value = r.get(key)
    return value

def getExtendedTweets(id_array):
    ids = ','.join(id_array)
    url = 'https://api.twitter.com/1.1/statuses/lookup.json'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': key}
    params = {'id': ids, 'tweet_mode': 'extended'}
    r = requests.get(url, headers=headers, params=params)
    results = r.json()
    return results
        
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def static_site(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory('build', path)
    else:
        return send_from_directory('build', 'index.html')

@app.route('/api/v1/methods/search', methods=['GET'])
def api_search():
    search_string = request.args.get('searchString')
    search_type = request.args.get('searchType')
    result_type = request.args.get('resultType')
    if search_string == "":
        search_string = "how does twitter work"
    if search_type == 'user' and search_string[0] != 'from:': #need to fix with regex
        search_string = 'from:' + search_string
    if not result_type:
        result_type = 'mixed'
    url = 'https://api.twitter.com/1.1/search/tweets.json'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': key}
    params = {'q': search_string, 'lang': 'en', 'result_type': result_type}
    r = requests.get(url, headers=headers, params=params)
    results_ids = []
    for tweet in r.json()["statuses"]:
        results_ids.append(tweet["id_str"])
    return jsonify(getExtendedTweets(results_ids))

@app.route('/api/v1/methods/showcase', methods=['GET'])
def api_showcase():
    users = ["from:jabrils_", "from:Raspberry_Pi", "from:MarkKnopfler", "from:mightycarmods", "from:playhearthstone"]
    index = random.randint(0, len(users) - 1)
    user = users[index]
    cache_status = "expired"
    previous_query = redisRead(user + "_time")
    cache_age = 0

    if previous_query is not None:
        print("checking query time")
        expire_time_seconds = 43200
        old_time = float(previous_query)
        current_time = unix_time_seconds(datetime.now())
        cache_age = int(current_time - old_time)

        if cache_age < expire_time_seconds:
            print("setting cache to active")
            cache_status = "active"
        
    if cache_status == "expired":
        print("requesting from twitter")
        url = 'https://api.twitter.com/1.1/search/tweets.json'
        headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': key}
        params = {'q': user}
        r = requests.get(url, headers=headers, params=params)
        results_ids = []

        for tweet in r.json()["statuses"]:
            results_ids.append(tweet["id_str"])

        full_tweets = getExtendedTweets(results_ids)
        redisWrite(user, json.dumps(full_tweets))
        cache_age = 0
        new_tweet = full_tweets[random.randint(0, len(full_tweets) - 1)]
        return jsonify([[new_tweet], cache_age])

    cached_tweets = json.loads(redisRead(user))
    print("Submitting cached tweets")
    return jsonify([[cached_tweets[random.randint(0, len(cached_tweets) - 1)]], cache_age])

@app.route('/api/v1/utilities/cacheRefresh', methods=['GET'])
def api_clearCache():
    clear_redis()
    print("Cache cleared.")
    return jsonify({"success": "success"})




if __name__ == "__main__":
    app.run(host="0.0.0.0", port="443")