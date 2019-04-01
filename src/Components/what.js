import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const What = () => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                    <h3 className="content-title">Что мне даст работа с L&B</h3>
                </ScrollAnimation>                
                <div className="content-area">        
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>    
                        <div className="content-area--block">
                            <h4 className="more-clients">Больше клиентов</h4>
                            <p>Возможность принимать дополнительных клиентов в свободное время, мы даем возможность зарабатывать больше!</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <div className="content-area--block">
                            <h4 className="feedback-communication">Честные отзывы</h4>
                            <p>Доверие и репутацию на L&B обеспечивают отзывы, которые посетители и мастера оставляют отзыв друг на друга по 
                                завершению каждого сеанса. Вы можете посмотреть отзывы еще до того как клиент придет к вам.</p>
                        </div>   
                    </ScrollAnimation>     
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <div className="content-area--block business-creating-area">
                            <h4 className="business-creating">Проверенные клиентов</h4>
                            <p>Перед бронированием посетители должны предоставить определенную информацию о себе, например подтвержденный номер 
                                телефона и электронный адрес, в качестве других мер безопасности, вы можете установить условие, чтоб у клиентов 
                                были рекомендации других мастеров и подтвержденный профиль.</p>
                        </div>    
                    </ScrollAnimation>                
                </div>
            </div>
    );
}

export default What;
