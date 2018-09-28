//const React = require('react');
import React from 'react';

import Head from './components/Head';

class Layout extends React.Component{
//module.exports = React.createClass({
	//displayName: 'layout',

    constructor(props) {
        super(props);
        console.log(props);
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
        this.setTitle = this.setTitle.bind(this);
        this.getTitle = this.getTitle.bind(this);
    }

    handleClick() {
        alert('This proves react is working');
        console.log('tapped');
    }

    getTitle(){
        return(this.state.title);
    }

    componentDidMount() {

        console.log('I mount');
        this.setTitle();
    }

    setTitle(){
        this.setState({title: this.props.params.article});
        console.log('set title to'+ this.props.params.article)
    }

    render() {
		let custom = this.props.custom;
        return(
			<html>
            {/*Head Component*/}
			<Head title={this.getTitle()}/>
			<body>
                <div className="testing">UNDER CONSTRUCTION NOW: modularize Components; SHIP BY: September 30, 2018    <button onClick={this.handleClick}>Test React</button> </div>
                <header>
                    <div className="header-1">
                        {/*<div className="logo">
                           /!* <!--<img src="http://placehold.it/250x250" className="img-responsive">-->*!/
                            <div className="header-logo">
                                <span className="big-x">R</span><span className="big-x">H</span><span className="little-x">X</span>
                            </div>
                        </div>*/}   
                        <div className="header-title">
                            <div className="header-title-center">
                                <span>RASTA</span><span>HEALTH</span><span></span>
                            </div>
                            <div className="slogan">
                                <span>NATURALLY ORGANIC</span>
                            </div>
                        </div>
                    </div>
                    <div className="header-2">
                        <div className="menu-row">
                            <div className="menu-icon">
                                {/*<!--<button type="button" className="btn btn-lg" aria-label="menu">-->
                                <!--<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>-->
                                <!--</button>-->*/}
                                <div className="h-stripe"></div>
                                <div className="h-stripe"></div>
                                <div className="h-stripe"></div>
                            </div>
                            <div className="search">
                                <div className="search-blcok">
                                    <div className="input-group">

                                        <input type="text" className="form-control"/>
                                        <span className="input-group-addon">></span>
                                    </div>
                                </div>
                            </div>
                            <div className="logo-icon">
                                <div className="header-logo">
                                    <span className="big-x">R</span><span className="big-x">H</span><span className="little-x">X</span>
                                </div>
                            </div>
                            <div className="nav-bar">
                                <ul>
                                    <li>HOME</li><li>REMEDIES</li><li>STORE</li><li>BLOGS</li><li>HERBS</li><li>Q&A</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="adsense-box-mobile">
                    mobile ad
                </div>
                <main>
                    <div className="row">
                        <nav>
                            <ul>
                                <li>Prostate Heal</li>
                                <li>Coughing</li>
                                <li>Low Energy</li>
                                <li>Constipation Diarhhea</li>
                                <li>diarrhea</li>
                                <li>Acne</li>
                                <li>Oily Skin</li>
                                <li>Low Energy</li>
                                <li>Constipation Diarhhea</li>
                                <li>diarrhea</li>
                                <li>Acne</li>
                                <li>Oily Skin</li>
                            </ul>
                        </nav>
                        <section className="share">fb</section>
                        {this.props.children}
                        <section className="right">right</section>
                    </div>
                </main>
                <footer>
                    Website is in development phase
                </footer>
			<script dangerouslySetInnerHTML={{
				__html: 'window.PROPS='+ JSON.stringify(custom)
			}}/>
			<script src="/bundle.js" />
			</body>
			</html>
        );
    }
}

export default Layout;


