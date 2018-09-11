//const React = require('react');
import React from 'react';

class Layout extends React.Component{
//module.exports = React.createClass({
	//displayName: 'layout',

    constructor(props) {
        super(props);

        this.state = {};

        this.handleClick = this.handleClick.bind(this);
    }

	handleClick(){
		alert('this proves that reactjs is working');
	}
    render() {
		let custom = this.props.custom;
        return(
			<html>
			<head>
				<title>{custom.title}</title>
				<link rel='stylesheet' href='/style.css' />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
			</head>
			<body>
                <div className="testing">UNDER CONSTRUCTION NOW: ES5 to ES6 Conversion; SHIP BY: September 15, 2018</div>
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


