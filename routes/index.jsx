//let router = require('express').Router();


import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
const router = express();
import Routes from './routes';
router.get('*', function(request, response) {
    let props = { title: 'RASTAHEALTH' };

        let context = {articles: [
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
        ]}
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
