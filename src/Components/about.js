import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                    <h3 className="content-title">Что такое L&B</h3>     
                </ScrollAnimation>                
                <div className="content-area">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={100}>
                        <div className="content-area--block">
                            <p className="big-text">
                                <span>200 000</span>
                                <span>Мастеров</span>
                            </p>
                            <p>Именно такое количество мастеровприсоеденилось к нашему сообществу, стань частью большой команды.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={200}>
                        <div className="content-area--block">
                            <p className="big-text">
                                <span>15 000</span>
                                <span>Клиентов.</span>
                            </p>
                            <p>Среднее количество кол-во клиентов которые ежедневно пользуються услугами мастеров.</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInUp" animateOnce={true} delay={300}>
                        <div className="content-area--block">
                            <p className="big-text">
                                <span>5 000</span>
                                <span>/ мес</span>
                            </p>
                            <p>Наша большая команда растет с каждым месяцем, Все больше мастеров по всему миру выберают нас.</p>
                        </div>
                    </ScrollAnimation>
                </div>          
            </div>
    );
}

export default About;
