var ReactDOM = require('react-dom');
var routes = require('./routes/routes.jsx');
var ReactGA = require('react-ga');

    ReactGA.initialize('UA-96092916-1');

function fireTracking() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname );
}

ReactDOM.render(
    routes, document
);


