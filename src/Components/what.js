import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const What = ({translateData}) => {
    return (
            <div className="content">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}>
                    <h3 className="content-title">{translateData.whatTitle}</h3>
                </ScrollAnimation>                
                <div className="content-area">        
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>    
                        <div className="content-area--block">
                            <h4 className="more-clients">{translateData.whatText1_title}</h4>
                            <p>{translateData.whatText1}</p>
                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <div className="content-area--block">
                            <h4 className="feedback-communication">{translateData.whatText2_title}</h4>
                            <p>{translateData.whatText2}</p>
                        </div>   
                    </ScrollAnimation>     
                    <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                        <div className="content-area--block business-creating-area">
                            <h4 className="business-creating">{translateData.whatText3_title}</h4>
                            <p>{translateData.whatText3}</p>
                        </div>    
                    </ScrollAnimation>                
                </div>
            </div>
    );
}

export default What;
