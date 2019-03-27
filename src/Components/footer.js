import React from 'react';
import SendEmail from './HOC/sendEmail';

const Footer = () => {

    return (
            <div className="footer">
                <div className="footer-form">
                    <div className="main-content">
                        <SendEmail 
                            position = "footer"
                            title = "Зарабатывай вместе с нами !"
                            inputDesc = "Это абсолютно бесплатно, стань первым кто присоедениться к большой семье мастеров. Никакого спама на вашу почту."
                        />
                    </div>
                </div>
                <div className="footer-link">
                    <div className="main-content">
                        <a href="/">Главная</a>
                        <a href="/">Пользовательское соглашение</a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
