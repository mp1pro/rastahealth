import React from 'react';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    Switch
} from 'react-router-dom';

import {StaticRouter} from 'react-router-dom';

import Layout from '../views/Layout.jsx';
import Index from '../views/Index.jsx';
import About from '../views/About.jsx';
import Article from '../views/Article.jsx';

if (typeof window === 'object'){
    function createElement(Component,props){
        return <Component {...props} {...window.PROPS} />;
    }

}

class Routes extends React.Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Layout>
        );
    };
}

export default Routes;

{/*<IndexRoute component={Index}/>
 <Route path='about' component={About}/>
 <Route path='article' component={Index}/>
 <Route path='article/:article'
 //component={Article}
 render={(props) => <Article {...props} setTitle={this.setTitle}/>}
 />*/}
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

/*    function fireTracking() {
 ReactGA.set({ page: window.location.pathname });
 ReactGA.pageview(window.location.pathname );
 }*/

