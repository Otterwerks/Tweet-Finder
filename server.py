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
    search_type = request.args.get('searchType')
    result_type = request.args.get('resultType')
    if search_type == 'user' and search_string[0] != '@':
        search_string = '@' + search_string
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
    results = "showcase"
    return results

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="443")