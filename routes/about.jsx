var React = require('react');

module.exports = React.createClass({
        _handleClick: function(){
                alert('this is a test');
        },
        render: function(){
                return(
                        <html>
                        <head>
                                <title>{this.props.title}</title>
                                <link rel='stylesheet' href='/style.css'/>
                        </head>
                        <body>
                        <div>
                                <h1>{this.props.title}</h1>
                                <p>Development phase</p>
                                <button onClick={this._handleClick}>TEST ME</button>
                        </div>
                        
                        <script src="/bundle.js" />
                        </body>
                        </html>
                );
        }
});

