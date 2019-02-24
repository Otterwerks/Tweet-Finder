import os
import requests
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
    url = 'https://api.twitter.com/1.1/search/tweets.json'
    headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': key}
    params = {'q': search_string}
    r = requests.get(url, headers=headers, params=params)
    results = r.json()
    return jsonify(results)

@app.route('/api/v1/methods/showcase', methods=['GET'])
def api_showcase():
    results = "showcase"
    return results

if __name__ == "__main__":
    app.run()