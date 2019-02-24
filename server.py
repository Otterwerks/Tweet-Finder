import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='/build')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def static_site(path):
    if path != "" and os.path.exists("build/" + path):
        return send_from_directory('build', path)
    else:
        return send_from_directory('build', 'index.html')

if __name__ == "__main__":
    app.run()