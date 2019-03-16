import React, { Component } from 'react';

class Info extends Component {
    render () {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <h2>Site Info</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3" id="info-box">
                        <p>This website was built using React and Flask, it uses the free Twitter search API to query Tweets and accounts based on user input. Tweets from my favorite accounts are stored in a Redis cache for up to 12 hours (or 43,200 seconds) after they are fetched, you may manually clear the cache to force new Tweets to be fetched. I designed the UI/UX based on Twitter's Brand Resources without libraries or templates. I took the picture on the home page at the Golden Gate Bridge in San Francisco, Twitter's home.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8">
                        <p>For detailed developer information, please visit the <a href="https://github.com/Otterwerks/Tweet-Finder" target="_blank">GitHub Project Page</a>.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Info;