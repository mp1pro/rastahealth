/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Body extends React.Component{
    render() {
        return(
            <body>
                {this.props.children}
            </body>
        );
    }
}

export default Body;