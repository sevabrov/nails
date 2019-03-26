import React, { Component } from 'react';

//add slick slider
import Slider from "react-slick";//add slick slider

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Review extends Component {

    feedback = [
        {
            name: 'anastasiia_lytsenko',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/ed1274b589a5d2ce1dce8370e5661b5f/5D4B5611/t51.2885-19/s150x150/47394394_567107523736052_2229308405690925056_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/anastasiia_lytsenko',
            text: 'Всем привет) Я Настя, мастер маникюра. Моей работой довольны уже более 1500 счастливых девушек. Вашим ноготкам будут завидовать!)'
        },
        {
            name: 'bestartnails',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/d3d38adb2f40b96fd5e65c352aa5c533/5D361CFE/t51.2885-19/s150x150/34855711_1975048462808120_8008805485123731456_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/bestartnails',
            text: 'Unique Nail Art Designs 2018: The Best Images, Creative Ideas, Different Colors. All you need is here.'
        },
        {
            name: 'elenasmiyan55',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/84530c4490b6db8c7b9422503fc76151/5D18C1EC/t51.2885-19/s150x150/50860475_1949001532073789_7529647238386024448_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/elenasmiyan55',
            text: 'Меня зовут Лена и я мастер маникюра и педикюра. Работаю уже более 3-х лет. Приходите ко мне, не пожалеете) Лучший сервис по хорошой цене вас приятно удивит.'
        },
        {
            name: 'yana_tabaniuk',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/f0d20b9a099c4bdb0a2d979d229b2cd7/5D19AC22/t51.2885-19/s150x150/43818260_1948732878542246_1449036860893429760_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/yana_tabaniuk',
            text: 'Всем привет, я Яна Табанюк, 2-х кратный чемпион Украины. У меня работают очень квалифицированные мастера! Всегда стерильные инструменты и забота о клиетне!'
        },
        {
            name: 'chelyadina_anna',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/2976485ca2ad8f5afe4dd2e608e33f78/5D16B5F7/t51.2885-19/s150x150/43985301_553721968388429_4110673406129602560_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/vyacheslavovna_nails/',
            text: 'Культ чистоты, всё со вкусом, нет предела совершенству, клиент должен уходить с улыбкой. Вот мои принципы в работе!'
        },
        {
            name: 'nail_artist_marusya',
            ava: 'https://instagram.fiev1-1.fna.fbcdn.net/vp/ba6b310efc518706fd2c4e32a2fbaee3/5D35F577/t51.2885-19/s150x150/46005724_259438528062227_7397845133137281024_n.jpg?_nc_ht=instagram.fiev1-1.fna.fbcdn.net',
            link: 'https://www.instagram.com/nail_artist_marusya/',
            text: 'ПИЛИТЬ НОГТИ-IS MY CARDIO. Приходите ко мне и вам захочется остаться НАВСЕГДА!!!'
        },
        
    ]
    
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 978,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ]
        };

          return (
            <div className="content">
                <h3 className="content-title no-margin">Вы в хороших руках</h3>
                <h5 className="content-sub-title">У нас размещаются только реальные отзывы пользователей системы</h5>
                <Slider {...settings}>
                {this.feedback.map((item, index) => {
                    return (
                        <div className="review-area" key={index}>
                            <div className="review-block">
                                <p className="review-block-text">{item.text}</p>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="review-block-user">
                                    <img src={item.ava ? item.ava : 'img/default-avatar.svg'} alt={item.name}/>
                                    <p>{item.name}</p>
                                </a>                        
                            </div>
                        </div> 
                    )
                })}
                </Slider>
            </div>
    );
    }    
}

export default Review;
