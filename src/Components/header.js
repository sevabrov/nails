import React from 'react';

import logo from '../styling/img/logo.png'

const Header = () => {    

    let sendEmail = (e)=> {
        e.preventDefault();
    }
    return (
        <div className="header">
            <div className="main-content">
                <div className="header-top">
                    <img className="logo" src={logo} alt="logo"/>
                </div>
                <h1 className="header-title">Зарабатывай на клиентах, получай реальные отзывы и будь в курсе всех новинок Бьюти индустрии вместе с L&B.</h1>
                <h1 className="header-title mob-view">Зарабатывай на клиентах вместе с L&B.</h1>
                {/* <p className="input-text">Нам доверяют более 200 000 экспертов по всему миру</p> */}
                <form onSubmit={sendEmail}>
                    <div className="input">
                        <input type="text" placeholder="Оставьте ваш e-mail"/>
                        <button className="start-btn">Начать Сейчас</button>
                    </div>
                </form>
                <p className="input-desc">Мы не передаём вашу почту третьим лицам и не рассылаем спам</p>
            </div>            
        </div>
    );
}

export default Header;
