import os
import requests
import random
import json
import re
from key import key
from flask import Flask, send_from_directory, request, jsonify

app = Flask(__name__, static_url_path='/build')

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
    params = {'q': search_string, 'count': 10, 'result_type': result_type}
    r = requests.get(url, headers=headers, params=params)
    results = r.json()
    return jsonify(results)

@app.route('/api/v1/methods/showcase', methods=['GET'])
def api_showcase():
    users = ["from:jabrils_", "from:Raspberry_Pi", "from:MarkKnopfler", "from:mightycarmods", "from:aantonop"]
    index = random.randint(0, len(users) - 1)
    user = users[index]
    url = 'https://api.twitter.com/1.1/search/tweets.json'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': key}
    params = {'q': user}
    r = requests.get(url, headers=headers, params=params)
    results = r.json()["statuses"]
    result = results[random.randint(0, len(results) - 1)]
    return jsonify(result)

@app.route('/api/v1/methods/media', methods=['GET'])
def api_media():
    url = "https://twitter.com/NASA/status/1102652693548544002"
    headers = {'Content-Type': 'text/html', 'Accept': 'text/html'}
    r = requests.get(url)
    return r.text

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="443")