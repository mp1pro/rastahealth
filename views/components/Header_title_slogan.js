/**
 * Created by mp1pro on 9/29/18.
 */

import React from 'react';

class Header_title_slogan extends React.Component{
    render() {
        return(
            <div className="header-1">
                {/*<div className="logo">
                 /!* <!--<img src="http://placehold.it/250x250" className="img-responsive">-->*!/
                 <div className="header-logo">
                 <span className="big-x">R</span><span className="big-x">H</span><span className="little-x">X</span>
                 </div>
                 </div>*/}
                <div className="header-title">
                    <div className="header-title-center">
                        <span>RASTA</span><span>HEALTH</span><span></span>
                    </div>
                    <div className="slogan">
                        <span>NATURALLY ORGANIC</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header_title_slogan;

