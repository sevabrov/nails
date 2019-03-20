import React from 'react';

import logo from '../styling/img/logo.png'

const Header = (props) => {

    let sendEmail = (e)=> {
        e.preventDefault();
    }
    console.log(props)
    return (
        <div className="header">
            <div className="main-content">
                <div className="header-top">
                    <img src={logo} alt="logo"/>
                    <button className="start-btn">Начать сейчас</button>
                </div>
                <h1 className="header-title">Зарабатывай вместе с лучшими мастерами бьюти индустрии</h1>
                <p className="input-text">Нам доверяют более 200 000 экспертов по всему миру</p>
                <form onSubmit={sendEmail}>
                    <div className="input">
                        <input type="text" placeholder="Ваш e-mail adress"/>
                        <button className="start-btn">Начать Сейчас</button>
                    </div>
                </form>
                <p className="input-desc">Это абсолютно бесплатно, стань первым кто присоедениться к большой семье мастеров.  Никакого спама на вашу почту.</p>
            </div>            
        </div>
    );
}

export default Header;
