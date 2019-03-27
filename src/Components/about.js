import React from 'react';

const About = () => {
    return (
            <div className="content">
                <h3 className="content-title">Что такое L&B</h3>
                <div className="content-area">
                    <div className="content-area--block">
                        <p className="big-text">
                            <span>200 000</span>
                            <span>Мастеров</span>
                        </p>
                        <p>Именно такое количество мастеровприсоеденилось к нашему сообществу, стань частью большой команды.</p>
                    </div>
                    <div className="content-area--block">
                        <p className="big-text">
                            <span>15 000</span>
                            <span>Клиентов.</span>
                        </p>
                        <p>Среднее количество кол-во клиентов которые ежедневно пользуються услугами мастеров.</p>
                    </div>
                    <div className="content-area--block">
                        <p className="big-text">
                            <span>5 000</span>
                            <span>/ мес</span>
                        </p>
                        <p>Наша большая команда растет с каждым месяцем, Все больше мастеров по всему миру выберают нас.</p>
                    </div>
                </div>
            </div>
    );
}

export default About;
