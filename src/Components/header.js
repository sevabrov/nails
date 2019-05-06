import React from 'react';
import SendEmail from './HOC/sendEmail';

import ScrollAnimation from 'react-animate-on-scroll';

import logo from '../styling/img/logo.png';

const Header =({handlePopUp, translateData}) => {  
    return (
        <div className="header">
            <div className="main-content">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={400}> 
                    <div className="header-top">
                            <img className="logo" src={logo} alt="logo"/>
                    </div>             
                    <h1 className="header-title">
                        <span>{translateData.headerTitle}</span>   
                        <span className="mob-view">Зарабатывай на клиентах вместе с L&B.</span> 
                    </h1>   
                    <SendEmail 
                        position = "header"
                        inputDesc = {translateData.inputDesc}
                        handlePopUp = {handlePopUp}
                    />
                </ScrollAnimation>
            </div>            
        </div>
    )
}

export default Header;
