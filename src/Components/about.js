import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="flipInY" animateOnce={true}>
                    <h3 className="content-title small-margin">Что такое L&B</h3>     
                </ScrollAnimation>                
                <div className="content-area about">
                    <ScrollAnimation animateIn="bounceInUp" animateOnce={true}>
                        <p>L&B это важнейший инcтрумент для твоего бизнеса, который <b>поможет найти новых клиентов</b>, 
                            получить <b>бесплатно нужные рекомендации</b> от лучших экспертов западного рынка, <b>повысить уровень своей квалификации</b>,
                            получить признание и даже <b>стать одним из экспертов европейских брендов</b>. Становись лучшим вместе с нами!</p>
                    </ScrollAnimation>
                </div>          
            </div>
    );
}

export default About;
