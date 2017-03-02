var React = require('react');

module.exports = React.createClass({
	displayName: 'layout',
	_handleClick: function(){
		alert('this is a test');
	},
        render: function(){
		var custom = this.props.custom; 
                return(
			<html>
			<head>
				<title>{custom.title}</title>
				<link rel='stylesheet' href='/style.css'/>
			</head>
			<body>
                        <div>
				<h1>{this.props.title}</h1>
				<p>Development phase</p>
				<button onClick={this._handleClick}>TEST ME</button>
                        </div>
			{this.props.children}
			<script dangerouslySetInnerHTML={{
				__html: 'window.PROPS='+ JSON.stringify(custom)
			}}/>
			<script src="/bundle.js" />
			</body>
			</html>
                );
        }
});



