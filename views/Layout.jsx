//const React = require('react');
import React from 'react';

import {
    Router,
    Route,
    IndexRoute,
    browserHistory,
    Switch,
 BrowserRouter
} from 'react-router-dom';

import HTML from './components/HTML';
    import Head from './components/Head';
    import Body from './components/Body';
        import Testing from './components/Testing';
        import Header from './components/Header';
            import Header_title_slogan from './components/Header_title_slogan';
            import Header_menu_nav from './components/Header_menu_nav';
        import Adsense_box_mobile from './components/Adsense_box_mobile';
        //import Main from './components/Main';
            import Nav from './components/Nav';
            import Share from './components/Share';
            import Right from './components/Right';
        import Footer from './components/Footer';




class Layout extends React.Component{
//module.exports = React.createClass({
	//displayName: 'layout',

    constructor(props) {
        super(props);

        this.state = {
            articles: [
                {
                    "title": "Molecule Man",
                    "age": 29,
                    "secretIdentity": "Dan Jukes",
                    "powers": [
                        "Radiation resistance",
                        "Turning tiny",
                        "Radiation blast"
                    ]
                },
                {
                    "title": "Madame Uppercut",
                    "age": 39,
                    "secretIdentity": "Jane Wilson",
                    "powers": [
                        "Million tonne punch",
                        "Damage resistance",
                        "Superhuman reflexes"
                    ]
                },
                {
                    "title": "Eternal Flame",
                    "age": 1000000,
                    "secretIdentity": "Unknown",
                    "powers": [
                        "Immortality",
                        "Heat Immunity",
                        "Inferno",
                        "Teleportation",
                        "Interdimensional travel"
                    ]}
            ],
            title:"Rasta Health"
        }

        this.handleClick = this.handleClick.bind(this);
        /*this.setTitle = this.setTitle.bind(this);*/
        this.getTitle = this.getTitle.bind(this);
    }

    handleClick() {
        alert('This suggests react was bundled correctly');
        console.log('tapped');
    }

    getTitle(){
        return(this.state.title);
    }

    componentDidMount() {

        console.log('I mount');
        //this.setTitle();
    }

/*    setTitle(){
        this.setState({title: this.props.params.article});
        console.log('set title to'+ this.props.params.article)
    }*/

    render() {
		let custom = this.props.custom;
        console.log(this.props.match);
        /*import About from './About';*/
        return(
			<HTML>

            {/*Head Component*/}
			<Head />

            {/*Body Component*/}
			<Body>
                {/*Testing Component*/}
                <Testing handleClick={this.handleClick}/>

                {/*Header Component*/}
                <Header>
                    <Header_title_slogan/>
                    <Header_menu_nav/>
                </Header>

                {/*Adsense_box_mobile Component*/}
                <Adsense_box_mobile/>

                {/*TODO; main should only contain this.props.children*/}
                <main>
                    {/*TODO; Get rid of this div className="row"*/}
                    <div className="row">

                        {/*TODO; Nav should have menu-items passed in as props*/}
                        <Nav/>

                        {/*Share Component*/}
                        <Share/>

                        {/*Children from routing appear here*/}
                        {this.props.children}

                        {/*Right Component*/}
                        <Right/>

                    </div>
                </main>

                {/*Footer Component*/}
                <Footer/>

			<script dangerouslySetInnerHTML={{
				__html: 'window.PROPS='+ JSON.stringify(custom)
			}}/>
			<script src="/bundle.js" />
			</Body>
			</HTML>
        );
    }
}

export default Layout;


