var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouter = require('react-router');

const Message = React.createClass({
  render() {
    return <h3>Message</h3>
  }
})

router.get('*', function(request, response) {
    var props = { title: 'RASTAHEALTH' };
    ReactRouter.match({
        routes: require('./routes.jsx'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            var html = ReactDOMServer.renderToString(
                <ReactRouter.RouterContext {...renderProps}
			createElement={function(Component, renderProps) {
                        return <Component {...renderProps} {...props} />;
                    }}
		 />
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;
