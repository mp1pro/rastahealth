/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Testing extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="testing">UNDER CONSTRUCTION NOW: Setting up forms, API, mySQL and Redux; SHIP BY: FEB 28, 2019    <button onClick={this.props.handleClick}>Test React</button> </div>
        );
    }
}

export default Testing;