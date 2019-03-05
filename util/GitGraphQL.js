/**
 * Created by mp1pro on 2/26/19.
 */

import PKEY from '../config/config';

const KEY=PKEY.PKEY;

const GraphQL = {
    getCommit(){
        console.log('test grab');
        //return 'testerrr';



        //working fetch below
        return fetch('https://api.rastahealth.com/githubKey', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({})
        })
            .then(response => response.json())
            .then(data => {
                console.log('testing 123');
                let may = data.key[0].apikey;
                console.log('where is ',may);
                return may;
            })
            .then(key => {
                return fetch('https://api.github.com/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': `application/json`,
                        Accept: 'application/json',
                        Authorization: `bearer ${key}`
                    },
                    body: JSON.stringify({
                        query: `{
                            node(id:"MDY6Q29tbWl0Nzc3OTc0NDA6Njc5OTZjOTEyZjdkODRjOTU3N2YwNzA2ODRkNmY0OGFmNjA3Mjg2Yg==") {
                                ... on Commit {
                                    author {
                                        date
                                    }
                                    message
                                }
                            }
                        }`
                    })
                })
            })
            .then(r => r.json())
            .then(data => {
                console.log('here ',data);
                return data
            });


        /*return fetch(`https://api.github.com/repos/mp1pro/rastahealth/commits/master`),
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({query: "commit"})
            }
            .then(results=>{
                //console.log(results);
                return results.json()
            })
            .then(results=>{
                console.log(results);
                return results
            });*/
    }
};

export default GraphQL;
