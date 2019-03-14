# Tweet Finder

_A website to showcase Tweets using React, Flask, and Redis._

View live at https://otterwerks-twitter-app.herokuapp.com

<img src="https://github.com/otterwerks/Tweet-Finder/demo.png">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Summary
Tweet Finder is a single page application (SPA) that allows the user to search Twitter for Tweets as well as be shown Tweets from preselected accounts. The primary purpose of this project is to serve as a learning tool to familiarize myself with APIs. The Twitter API offers several different tiers of service, this project utilizes the standard (free) API. In addition to utilizing APIs, building this project has helped me create foundational skills in React, Flask, and CSS. Caching was an afterthought and it was very interesting to integrate Redis into the project after the fact. The design was inspired by Twitter and utilizes the Twitter Brand Resources for content guidelines, fonts, and colors.

## Features
- Designed to be mobile-first, responsive
- Search Twitter with various search parameters
- Clicking the Tweet display name opens a profile card for that account
- Clicking a hashtag or account name will run a new search for that hashtag or account
- Verified accounts marked with a checkmark icon
- Be shown a random Tweet from preselected accounts
- Redis caching of the random Tweets, configurable cache duration - currently set to expire after 12 hours
- All design and formatting created without templates or libraries


## Technical
- Frontend (JavaScript)
  - React (main SPA)
  - Axios (http requests)
- Backend (Python)
  - Flask (Serving static site, internal API endpoints)
  - request (http requests)
  - redis (redis communication)
  - gunicorn (HTTP production server)


## Deployment
Clone this repository.

Successful deployment will require adding three files to the project:
- splash.jpeg, location: 'src/' (home page background image)
- key.py, location: '/' (API authorization token for Twitter)
- redis_password.py, location: '/' (Redis server hostname, port, and password)

#### splash.jpeg
This can be any jpeg image, it will show up with a 30% dark tint for better text readability. Name it ```splash.jpeg``` and place it in the project root directory.

#### key.py
This file should contain a single line of code that looks like ```key = "bearer <alphanumeric_string>"```, replace <alphanumberic_string> with your unique authorization token. The basic process of generating an authorization token is as follows:
- apply for a Twitter Developer Account and register a new app https://developer.twitter.com/en/apply-for-access.html
- Use Postman to make an Oauth request to Twitter and receive a response containing the token https://developer.twitter.com/en/docs/basics/authentication/api-reference/token.html
- Copy the token into key.py

#### redis_password.py
All of the database specific variables are stored in this file, there should be three lines of code: ```host = "https://<your_server_address>"```, ```port = "<server_port_number>"```, and ```password = "<your_database_password>"```. This project uses the <a href="https://redislabs.com/blog/redis-cloud-30mb-ram-30-connections-for-free/">Redis Cloud</a> add-on with a free subscription. 

### Building the App
This project was started with create-react-app, navigate to the project root directory and ```npm run build```

### Deploy Locally
To serve the project locally, install the latest version of Python and create a new virtual environment. Activate the virtual environment, then navigate to the project root directory and ```pip install requirements.txt```. Set the environment variable ```export FLASK_APP=server.py```, and start the server with ```flask run```. You can now open a browser and navigate to http://localhost:5000 to view the project.


### Deploy on Heroku
After building the app, this project is ready to be deployed on Heroku. Select whichever <a href="https://devcenter.heroku.com/categories/deployment">deployment method</a> suits you. Be sure to assign a dyno to the app: ```heroku ps:scale web=1```, with the <a href="https://devcenter.heroku.com/articles/heroku-cli">Heroku CLI</a> installed.



## Resources Used
- <a href="https://reactjs.org/">ReactJS</a> tutorial and step-by-step guide
- <a href="https://redis.io/topics/quickstart">Redis Quick Start Guide</a>
- <a href="https://opensource.com/article/18/4/how-build-hello-redis-with-python">How to Build Hello Redis with Python</a>
- <a href="https://dev.to/sahilrajput/install-flask-and-create-your-first-web-application-2dba">Install Flask and Create Your First Application</a>
- <a href="https://developer.twitter.com/en/docs.html">Twitter API Documentation</a>
- <a href="https://about.twitter.com/en_us/company/brand-resources.html">Twitter Brand Resources</a>
- <a href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app">Create-React-App</a>, <a href="https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#table-of-contents">Full user guide</a>
- <a href="https://www.npmjs.com/package/axios">Axios</a> project page
- <a href="https://alligator.io/react/axios-react/">Using Axios with React</a>
- <a href="http://docs.python-requests.org/en/master/">Requests</a> documentation