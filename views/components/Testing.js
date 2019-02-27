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
            <div className="testing" >
                <div style={{color:'green'}}><b>LAST COMMIT:</b> {this.props.lastCommit}</div>
                <div style={{color:'green'}}><b>LAST COMMIT TIME:</b> {this.props.lastTime}</div> <div><b>NEXT COMMIT:</b> Setting up forms; SHIP BY: FEB 28, 2019</div>
                <button onClick={this.props.handleClick}>Test React</button>
            </div>
        );
    }
}

export default Testing;