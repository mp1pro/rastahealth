//let router = require('express').Router();


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
const router = express();
import Routes from './routes';
router.get('*', function(request, response) {
    let props = { title: 'RASTAHEALTH' };

        let context = {}
        let html = ReactDOMServer.renderToString(
            <StaticRouter location={request.url} context={context}>
                <Routes />
            </StaticRouter>
        );

        if(html){
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }

});

module.exports = router;
