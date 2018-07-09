const ReactGA = require('react-ga');
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;



let browserHistory = ReactRouter.browserHistory;
/*
if (typeof window === 'object'){
	function createElement(Component,props){
		return <Component {...props} custom = {window.PROPS} />;
	}
    function fireTracking() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname );
    }




}
 createElement={createElement}
 onUpdate={fireTracking}
 */


module.exports = (
    <Router history={browserHistory} >
        <Route path='/' component={require('../views/Layout.jsx')}>
		<IndexRoute  component={require('../views/Index.jsx')}/>
		    <Route path='about' component={require('../views/About.jsx')}/>
        </Route>
    </Router>
);
