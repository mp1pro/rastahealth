/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Header extends React.Component{
    render() {
        return(
            <header>
                {this.props.children}
            </header>
        );
    }
}

export default Header;