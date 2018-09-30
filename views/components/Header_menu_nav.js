/**
 * Created by mp1pro on 9/29/18.
 */


import React from 'react';

class Header_menu_nav extends React.Component{
    render() {
        return(
            <div className="header-2">
                {/* TODO: this module needs a redo before breaking it down further*/}
                <div className="menu-row">
                    <div className="menu-icon">
                        {/*<!--<button type="button" className="btn btn-lg" aria-label="menu">-->
                         <!--<span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>-->
                         <!--</button>-->*/}
                        <div className="h-stripe"></div>
                        <div className="h-stripe"></div>
                        <div className="h-stripe"></div>
                    </div>
                    <div className="search">
                        <div className="search-blcok">
                            <div className="input-group">

                                <input type="text" className="form-control"/>
                                <span className="input-group-addon">></span>
                            </div>
                        </div>
                    </div>
                    <div className="logo-icon">
                        <div className="header-logo">
                            <span className="big-x">R</span><span className="big-x">H</span><span className="little-x">X</span>
                        </div>
                    </div>
                    <div className="nav-bar">
                        <ul>
                            <li>HOME</li><li>REMEDIES</li><li>STORE</li><li>BLOGS</li><li>HERBS</li><li>Q&A</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header_menu_nav;