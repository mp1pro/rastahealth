let router = require('express').Router();
let React = require('react');
let ReactDOMServer = require('react-dom/server');
let ReactRouter = require('react-router');


router.get('*', function(request, response) {
    let props = { title: 'RASTAHEALTH' };
    ReactRouter.match({
        routes: require('./routes.jsx'),
        location: request.url
    }, function(error, redirectLocation, renderProps) {
        if (renderProps) {
            let html = ReactDOMServer.renderToString(
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
