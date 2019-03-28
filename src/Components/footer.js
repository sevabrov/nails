import React from 'react';
import SendEmail from './HOC/sendEmail';

import ScrollAnimation from 'react-animate-on-scroll';

const Footer = () => {

    return (
            <div className="footer">
                <div className="footer-form">
                    <div className="main-content">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={200}>
                            <SendEmail 
                                position = "footer"
                                title = "Зарабатывай вместе с нами !"
                                inputDesc = "Это абсолютно бесплатно, стань первым кто присоедениться к большой семье мастеров. Никакого спама на вашу почту."
                            />
                        </ScrollAnimation>
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
