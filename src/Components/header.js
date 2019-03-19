import React from 'react';

import logo from '../styling/img/logo.png'

const Header = (props) => {
    console.log(props)
    return (
        <div className="header">
            <div className="header-bg"></div>
            <div className="main-content">
                <img src={logo} alt="logo"/>
            </div>
        </div>
    );
}

export default Header;
