/**
 * Created by mp1pro on 2/26/19.
 */

const GraphQL = {
    getCommit(){
        console.log('test grab');
        //return 'testerrr';

        return fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'bearer 0a473d10998e52d4a3178f8f7b69c59e716ae717'
            },
            body: JSON.stringify({
                query: `{
                    node(id:"MDY6Q29tbWl0Nzc3OTc0NDA6Y2QwMmZlZDQ5NDc3ZmFiNjhlOTczYzM5YWJmMGIxZmI0Yjc2YTIwMA==") {
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
            .then(r => r.json())
            .then(data => {
                return data
            });

        //working fetch below
        /*return fetch('https://api.github.com/repos/mp1pro/rastahealth/commits/master')
            .then(response => response.json())
            .then(data => {
                return data;
            });*/

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
