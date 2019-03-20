import React, { Component } from 'react';

//add slick slider
import Slider from "react-slick";//add slick slider

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Review extends Component {

    defaultAvatar = false;
    
    render() {
        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };

          return (
            <div className="content">
                <h3 className="content-title no-margin">Вы в хороших руках</h3>
                <h5 className="content-sub-title">Millions of people around the world have already made xPider the<br/> place where their dream happens.</h5>
                <Slider {...settings}>
                <div className="review-area">
                    <div className="review-block">
                        <p className="review-block-text">Работаю с этим сервисом уже более 
4х лет проживая в Португалии, очень рада, что теперь в Украине появиться возможность мастерам повышать свой уровень, и улучшать как кол-во так и качество клиентов.</p>
                        <div className="review-block-user">
                            <img src={this.defaultAvatar ? 'img/default-avatar.svg' : '/img/user1.svg'} alt="userName"/>
                            <p>Людмила В., Эпиляция</p>
                        </div>                        
                    </div>
                </div>
                <div className="review-area">
                    <div className="review-block">
                        <p className="review-block-text">Начала работать с этим сервисом в 2016 году. С тех пор я уже не переживаю поповоду смены локации,  
                            в любом городе можно теперь найти своих клиентов, и я не привязана к одному месту.</p>
                        <div className="review-block-user">
                            <img src={this.defaultAvatar ? 'img/default-avatar.svg' : '/img/user1.svg'} alt="userName"/>
                            <p>Людмила В., Эпиляция</p>
                        </div> 
                    </div>
                </div>
                <div className="review-area">
                    <div className="review-block">
                        <p className="review-block-text">Начала работать с этим сервисом в 2016 году. С тех пор я уже не переживаю поповоду смены локации,  
                            в любом городе можно теперь найти своих клиентов, и я не привязана к одному месту.</p>
                        <div className="review-block-user">
                            <img src={this.defaultAvatar ? 'img/default-avatar.svg' : '/img/user1.svg'} alt="userName"/>
                            <p>Людмила В., Эпиляция</p>
                        </div> 
                    </div>
                </div>
                <div className="review-area">
                    <div className="review-block">
                        <p className="review-block-text">Начала работать с этим сервисом в 2016 году. С тех пор я уже не переживаю поповоду смены локации,  
                            в любом городе можно теперь найти своих клиентов, и я не привязана к одному месту.</p>
                        <div className="review-block-user">
                            <img src={this.defaultAvatar ? 'img/default-avatar.svg' : '/img/user1.svg'} alt="userName"/>
                            <p>Людмила В., Эпиляция</p>
                        </div> 
                    </div>
                </div>
                </Slider>
            </div>
    );
    }    
}

export default Review;
