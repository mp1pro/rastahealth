const ReactGA = require('react-ga');
ReactGA.initialize('UA-96092916-1');
const ReactDOM = require('react-dom');

const routes = require('./routes/routes.jsx');



if (typeof window === 'object'){

    function fireTracking() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname );
    }
}


ReactDOM.render(
    routes, document
);


