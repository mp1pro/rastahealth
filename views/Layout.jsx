var React = require('react');

module.exports = React.createClass({
	displayName: 'layout',
	_handleClick: function(){
		alert('this proves that reactjs is working');
	},
        render: function(){
		var custom = this.props.custom;
                return(
			<html>
			<head>
				<title>{custom.title}</title>
				<link rel='stylesheet' href='/style.css' />
			</head>
			<body>
                <header>
                    <div className="header-1">
                        <div className="logo">
                           {/* <!--<img src="http://placehold.it/250x250" className="img-responsive">-->*/}
                            <div className="header-logo">
                                <span className="big-x">R</span><span className="big-x">H</span><span className="little-x">X</span>
                            </div>
                        </div>
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
                        <article>
                            <div className="article-title">
                                Home Remedies for Sore Throat
                            </div>
                            <div className="adsense-box">
                                desktop advert
                            </div>
                            <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis dolor placerat erat consequat mattis. Pellentesque dui ante, lacinia fringilla diam vitae, suscipit laoreet eros. Quisque condimentum vitae tellus a aliquet. Phasellus auctor elit sit amet sem finibus placerat. Aenean vitae sapien pulvinar nisi finibus tempus et id purus. Fusce a orci eu nisi rhoncus fermentum. Donec eget turpis non nisl condimentum rhoncus et non diam.
    
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna mi, faucibus eu tortor vitae, efficitur interdum turpis. Etiam lacus purus, laoreet sit amet erat ut, convallis sodales elit. Morbi et turpis eget magna volutpat posuere in non nibh. Aenean tempor tellus erat, id congue metus auctor sit amet. Morbi nec vestibulum lorem. Etiam eget congue ligula. In in neque id nulla dignissim tempor. Vestibulum scelerisque magna eu interdum vulputate. Maecenas gravida eget erat at semper. Phasellus blandit eu purus vel posuere. Donec nisi tortor, vestibulum pretium tortor ac, tempor ultricies velit. Mauris justo arcu, placerat quis erat quis, fringilla iaculis nisl. Pellentesque felis lacus, laoreet in aliquet a, blandit a nisl. Morbi scelerisque arcu sit amet nisi mollis fringilla.
    
                    Sed libero nisi, porta non congue id, pretium id tellus. Nunc eu lorem nec sem faucibus pellentesque. Vivamus a ante imperdiet, euismod metus et, aliquet nisl. Fusce eu velit ut ligula vulputate pellentesque eu ut tellus. Vestibulum eget ex id orci pharetra placerat. Mauris vel felis auctor, viverra diam nec, mattis ante. Donec tincidunt vitae ex sit amet viverra.
    
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque vitae vestibulum mi. Pellentesque faucibus, risus et mollis posuere, nisi ipsum vestibulum lacus, ac sodales orci purus in massa. Duis eu blandit mauris. Maecenas tincidunt magna ut quam porta luctus. Cras at nunc id tellus rutrum dignissim non ut purus. Etiam mollis enim sit amet nulla gravida, ut fermentum felis lacinia. Nam elementum urna odio, eget finibus ligula malesuada ac. Donec porttitor nulla eget semper vulputate. Quisque mollis maximus volutpat.
    
                    Ut ultrices sagittis sollicitudin. Nunc vel maximus nisi, sit amet porttitor sem. Nam eleifend posuere turpis sit amet gravida. Pellentesque tristique auctor dictum. Sed molestie quis purus eget aliquet. Sed volutpat, felis ac vulputate volutpat, quam libero porta magna, sit amet viverra ante urna ac nisi. Sed at diam sit amet metus venenatis auctor vel iaculis nulla. Aenean vel egestas nunc, a cursus libero. Pellentesque accumsan nisl orci, rhoncus sollicitudin augue tempus congue. Sed eu velit rutrum, tincidunt justo non, tristique lorem. Nullam auctor mollis lobortis.
                    </span>
                        </article>
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
});



