(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),o=(a(23),a(2)),i=a(3),l=a(5),m=a(4),u=a(7),h=a(6),d=(a(24),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"generateNavigationButtons",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(s.a.createElement("button",{className:this.props.active==e[a]?"navButton bold active":"navButton bold",value:e[a],onClick:this.props.pageNav},e[a]));return t}},{key:"render",value:function(){return s.a.createElement("div",{className:"navBar"},this.generateNavigationButtons(this.props.buttons))}}]),t}(n.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-1"}),s.a.createElement("div",{className:"col-4 no-padding"},s.a.createElement("p",{className:"textBox large extra-light-gray"},"Search Twitter for Tweets from your favorite users..."))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-2"}),s.a.createElement("div",{className:"col-4 no padding"},s.a.createElement("p",{className:"textBox large extra-extra-light-gray bold right"},"or view some of mine."))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("h2",{className:"primary"},"Search Tweets"))),s.a.createElement("div",{id:"search-row",className:"row"},s.a.createElement("div",{id:"search-box",className:"col-8 round-border no-padding"},s.a.createElement("div",{className:"row no-padding"},s.a.createElement("div",{className:"col-8 no-padding"},s.a.createElement("input",{id:"search-field",className:"form-item-text round-border",type:"text",value:this.props.value,onChange:this.props.onChange}))),s.a.createElement("div",{className:"row no-padding"},s.a.createElement("div",{className:"col-8 no-padding"},s.a.createElement("span",{className:"custom-select",id:"search-type"},s.a.createElement("select",{className:"select-search",value:this.props.searchType,onChange:this.props.selectSearchType},s.a.createElement("option",{value:"standard"},"Search For: Content"),s.a.createElement("option",{value:"user"},"Search For: Username"))),s.a.createElement("span",{className:"custom-select",id:"content-type"},s.a.createElement("select",{className:"select-search",value:this.props.contentType,onChange:this.props.selectContentType},s.a.createElement("option",{value:"mixed"},"Results: Standard"),s.a.createElement("option",{value:"popular"},"Results: Popular"),s.a.createElement("option",{value:"recent"},"Results: Recent"))),s.a.createElement("span",{id:"search-button"},s.a.createElement("button",{className:"button form-item",onClick:this.props.searchTweets},"Search")))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"tweets"},this.props.formatTweet(this.props.tweets)))))}}]),t}(n.Component),w=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"showDescription",value:function(){if(!this.props.tweet[0])return"Press the button to display a random tweet from one of my favorite Twitter accounts.";switch(this.props.tweet[0].user.screen_name){case"jabrils_":return s.a.createElement("p",null,s.a.createElement("strong",null,"Jabrils:")," He has some really cool videos up on his Youtube channel, I found him because I have a Tello drone and was researching projects for it. One of his projects was to program it to track faces using machine learning, bookmarked for my to-do list!");case"Raspberry_Pi":return s.a.createElement("p",null,s.a.createElement("strong",null,"Raspberry Pi:")," I started playing with Pis a couple years ago. The first thing I did was 'upgrade' a toy catapult I had with pan/tilt servos and a couple solenoids to fire it, all controlled through a Pi using a touchscreen interface I programmed using Kivy.");case"MarkKnopfler":return s.a.createElement("p",null,s.a.createElement("strong",null,"Mark Knopfler:")," A very talented guitarist who I grew up listening to, he just released a new album too!");case"mightycarmods":return s.a.createElement("p",null,s.a.createElement("strong",null,"Might Car Mods:")," These guys can be goofy but they gave me the confidence to start working on my car. I'm a big fan of their early videos on Youtube.");case"aantonop":return s.a.createElement("p",null,s.a.createElement("strong",null,"Andreas Antonopoulos:")," You've probably heard of Bitcoin but maybe you haven't heard of Andreas. If you are interested to learn more about cryptocurrency, this guy is my go-to source of well explained and unbiased knowledge.");default:return"I don't know anything about this account, how did it get here?"}}},{key:"render",value:function(){return s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"subHeader"},s.a.createElement("h2",{className:"dark-gray"},"Tweets From My Favorite Accounts")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-8"},s.a.createElement("div",{className:"input"},s.a.createElement("button",{className:"button form-item",onClick:this.props.getTweet},"Listen to the chirping")))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3"},s.a.createElement("div",{className:"textBox medium black round-border"},s.a.createElement("p",null,this.showDescription()))),s.a.createElement("div",{className:"col-5"},s.a.createElement("div",{className:"tweets"},this.props.formatTweet(this.props.tweet)))))}}]),t}(n.Component),g=a(9),y=a.n(g),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={view:"Home",searchString:"nasa",searchType:"content",contentType:"mixed",searchResults:[],awesomeTweets:[]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.setSearchType=a.setSearchType.bind(Object(u.a)(a)),a.setContentType=a.setContentType.bind(Object(u.a)(a)),a.searchTweets=a.searchTweets.bind(Object(u.a)(a)),a.pageNavigation=a.pageNavigation.bind(Object(u.a)(a)),a.formatTweets=a.formatTweets.bind(Object(u.a)(a)),a.awesomeTweets=a.awesomeTweets.bind(Object(u.a)(a)),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"setSearchType",value:function(e){this.setState({searchType:e.target.value})}},{key:"setContentType",value:function(e){this.setState({contentType:e.target.value})}},{key:"pageNavigation",value:function(e){this.setState({view:e.target.value})}},{key:"searchTweets",value:function(){var e=this;if(this.setState({searchResults:[]}),""!=this.state.searchString){var t="api/v1/methods/search?"+("searchString="+this.state.searchString)+("&searchType="+this.state.searchType)+("&contentType="+this.state.contentType);y.a.get(t).then(function(t){e.setState({searchResults:t.data.statuses})}).catch(function(e){console.log(e)}),this.setState({searchString:""})}}},{key:"awesomeTweets",value:function(){var e=this;y.a.get("api/v1/methods/showcase").then(function(t){e.setState({awesomeTweets:[t.data]})}).catch(function(e){console.log(e)})}},{key:"applyLink",value:function(e){return e.split(" ").map(function(e){return e.includes("http://")||e.includes("https://")?s.a.createElement("a",{href:e},e):e}).reduce(function(e,t){return e.concat(t," ")},[""])}},{key:"formatTweets",value:function(e){var t=this;return e.map(function(e){return s.a.createElement("div",{className:"tweet",key:e.id},s.a.createElement("div",{className:"tweetBorder"},s.a.createElement("div",{className:"tweetHeader"},s.a.createElement("h3",null,"By ",e.user.screen_name,", on ",e.created_at)),s.a.createElement("div",{className:"tweetBody"},s.a.createElement("p",{className:"tweetText"},t.applyLink(e.text))),s.a.createElement("div",{className:"tweetFooter"})))})}},{key:"currentView",value:function(){return"Search"===this.state.view?s.a.createElement(v,{onChange:this.handleChange,selectSearchType:this.setSearchType,selectContentType:this.setContentType,searchTweets:this.searchTweets,searchType:this.state.searchType,contentType:this.state.contentType,value:this.state.searchString,tweets:this.state.searchResults,formatTweet:this.formatTweets}):"Favorites"===this.state.view?s.a.createElement(w,{tweet:this.state.awesomeTweets,getTweet:this.awesomeTweets,formatTweet:this.formatTweets}):s.a.createElement(p,null)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Main",id:"splash"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-3 title no-padding"},s.a.createElement("h2",{className:"white"},"Otterwerks")),s.a.createElement("div",{className:"col-5 title no-padding"},s.a.createElement("h1",{className:"bold white"},"Tweet Finder"))),s.a.createElement("div",{className:"row",id:"Home"===this.state.view?"home":"page"},s.a.createElement("div",{className:"col-2 sticky center"},s.a.createElement(d,{pageNav:this.pageNavigation,buttons:["Home","Search","Favorites","Info"],active:this.state.view})),s.a.createElement("div",{className:"col-6 no-padding"},this.currentView())))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2b25d0c4.chunk.js.map