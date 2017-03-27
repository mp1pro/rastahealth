var ReactGA = require('react-ga');
ReactGA.initialize('UA-96092916-1');
var ReactDOM = require('react-dom');

var routes = require('./routes/routes.jsx');



if (typeof window === 'object'){

    function fireTracking() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname );
    }
}


ReactDOM.render(
    routes, document
);


