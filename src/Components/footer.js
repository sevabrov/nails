import React from 'react';

const Footer = () => {

    let sendEmail = (e)=> {
        e.preventDefault();
    }

    return (
            <div className="footer">
                <div className="footer-form">
                    <form onSubmit={sendEmail}>
                        <p className="footer-title">Зарабатывай вместе с нами !</p>
                        <div className="input">
                            <input type="text" placeholder="Ваш e-mail adress"/>
                            <button className="start-btn">Начать Сейчас</button>
                        </div>
                        <p className="input-desc">Это абсолютно бесплатно, стань первым кто присоедениться к большой семье мастеров. Никакого спама на вашу почту.</p>
                    </form>
                </div>
                <div className="footer-link">
                    <a href="/">Главная</a>
                    <a href="/">Пользовательское соглашение</a>
                    <a href="/">Обратная связь</a>
                </div>
            </div>
    );
}

export default Footer;
