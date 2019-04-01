import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
            <div className="content">
                <h3 className="content-title small-margin">Что такое L&B</h3>               
                <div className="content-area about">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce={true}>
                        <p>L&B это важнейший инcтрумент для твоего бизнеса, который поможет найти новых клиентов, 
                            получить бесплатно нужные рекомендации от лучших экспертов западного рынка, повысить уровень своей квалификации,
                            получить признание и даже стать одним из экспертов европейских брендов. Становись лучшим вместе с нами!</p>
                    </ScrollAnimation>
                </div>          
            </div>
    );
}

export default About;
