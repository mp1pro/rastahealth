var ReactDOM = require('react-dom');
var ReactGA = require('react-ga');
var routes = require('./routes/routes.jsx');


ReactGA.initialize('UA-96092916-1');



ReactDOM.render(
    routes, document
);


