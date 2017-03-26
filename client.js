var ReactDOM = require('react-dom');
var routes = require('./routes/routes.jsx');
var ReactGA = require('react-ga');

    ReactGA.initialize('UA-96092916-1');
function fireTracking() {
    ReactGA.pageview(window.location.hash);
}


ReactDOM.render(
    routes, document
);


