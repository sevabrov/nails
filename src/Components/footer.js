import React from 'react';
import SendEmail from './HOC/sendEmail';

import ScrollAnimation from 'react-animate-on-scroll';

const Footer = ({handlePopUp, translateData}) => {

    return (
            <div className="footer">
                <div className="footer-form">
                    <div className="main-content">
                        <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>                                       
                            <h2 className="footer-title">{translateData.footerTitle}</h2>  
                            <SendEmail 
                                position = "footer"
                                inputDesc = {translateData.footerText}                                
                                handlePopUp = {handlePopUp}
                            />
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="footer-link">
                    <div className="main-content">
                        <a href="/">{translateData.footerLinkMain}</a>
                        <a href="/">{translateData.footerLinkTermsOfUse}</a>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
