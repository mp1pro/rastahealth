import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import About from '../views/About.jsx';
import Article from '../views/Article.jsx';

if (typeof window === 'object'){
    function createElement(Component,props){
        return <Component {...props} {...window.PROPS} />;
    }
/*    function fireTracking() {
        ReactGA.set({ page: window.location.pathname });
        ReactGA.pageview(window.location.pathname );
    }*/
}

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Index} />
            <Route path='about' component={About} />
            <Route path='article' component={Index} />
                <Route path='article/:article'
                       component={Article}
                       render={(props) => <Article {...props} setTitle={this.setTitle} />}
                />

        </Route>
    </Router>
);

/*
const ReactGA = require('react-ga');
const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;



let browserHistory = ReactRouter.browserHistory;
/!*
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
 *!/


module.exports = (
    <Router history={browserHistory} >
        <Route path='/' component={require('../views/Layout.jsx')}>
		<IndexRoute  component={require('../views/Index.jsx')}/>
		    <Route path='about' component={require('../views/About.jsx')}/>
        </Route>
    </Router>
);
*/

