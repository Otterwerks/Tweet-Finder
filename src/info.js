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
                    <div className="col-3">
                        <p>This website was built using React and Flask, it uses the free Twitter search API to query Tweets and accounts based on user input. I designed the UI/UX based on Twitter's Brand Resources without libraries or templates. The picture on the home page was taken at the Golden Gate Bridge in San Francisco, Twitter's home, by myself.</p>
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