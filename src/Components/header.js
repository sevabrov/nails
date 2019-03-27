import React from 'react';
import SendEmail from './HOC/sendEmail';

import logo from '../styling/img/logo.png';

const Header =() => {  

    return (
        <div className="header">
            <div className="main-content">
                <div className="header-top">
                    <img className="logo" src={logo} alt="logo"/>
                </div>                    
                <SendEmail 
                    position = "header"
                    title = "Зарабатывай на клиентах, получай реальные отзывы и будь в курсе всех новинок Бьюти индустрии вместе с L&B."
                    inputDesc = "Мы не передаём вашу почту третьим лицам и не рассылаем спам"
                    mobileView = {true}
                />
            </div>            
        </div>
    )
}

export default Header;
