/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class HTML extends React.Component{
    render() {
        return(
            <html>
                {this.props.children}
            </html>
        );
    }
}

export default HTML;