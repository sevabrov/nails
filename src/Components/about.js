import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const About = ({translateData}) => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <h3 className="content-title small-margin">{translateData.aboutTitle}</h3>   
                </ScrollAnimation>            
                <div className="content-area about">
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <p>{translateData.aboutText}</p>
                    </ScrollAnimation>
                </div>          
            </div>
    );
}

export default About;
