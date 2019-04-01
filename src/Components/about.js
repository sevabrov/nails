import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <h3 className="content-title small-margin">Что такое L&B</h3>   
                </ScrollAnimation>            
                <div className="content-area about">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <p>L&B это важнейший инcтрумент для твоего бизнеса, который поможет найти новых клиентов, 
                            получить бесплатно нужные рекомендации от лучших экспертов западного рынка, повысить уровень своей квалификации,
                            получить признание и даже стать одним из экспертов европейских брендов. Становись лучшим вместе с нами!</p>
                    </ScrollAnimation>
                </div>          
            </div>
    );
}

export default About;
