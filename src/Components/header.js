import React from 'react';
import SendEmail from './HOC/sendEmail';

import ScrollAnimation from 'react-animate-on-scroll';

import logo from '../styling/img/logo.png';

const Header =({handlePopUp}) => {  

    return (
        <div className="header">
            <div className="main-content">
                <div className="header-top">
                    <img className="logo" src={logo} alt="logo"/>
                </div>        
                <ScrollAnimation animateIn="fadeInDown" animateOnce={true} delay={200}>          
                    <SendEmail 
                        position = "header"
                        title = "Стань лучшим экспертом бьюти индустрии вместе с L&B."
                        inputDesc = "Мы не передаём вашу почту третьим лицам и не рассылаем спам"
                        mobileView = {true}
                        handlePopUp = {handlePopUp}
                    />
                </ScrollAnimation>
            </div>            
        </div>
    )
}

export default Header;
