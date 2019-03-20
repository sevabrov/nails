import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

class Help extends Component {

    render() {
        return (
            <div className="content">
                <h3 className="content-title no-margin">Мы всегда готовы помочь вам</h3>
                <h5 className="content-sub-title">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
                    более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык
                    публичных выступлений в домашних условиях.</h5>

                <Tabs className="tab-menu">
                    <TabList>
                        <Tab className="study-menu">Обучение</Tab>
                        <Tab className="feedback-menu">Обратная связь</Tab>
                        <Tab className="free-menu">Будь свободным</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-content">
                            <p  className="tab-content-title">Стань лучшей версией себя!</p>
                            <ul>
                                <li>Мастерклассы для наших экспертов проводят только гуру своего дела, 
                                    который мы обязательно проверяем на наличие сертефикатов, и реальных отзывов.</li>
                                <li>Вы будете в курсе абсолютно всех самых важных событий в мире Бьюти индустрии в нашей стране.</li>
                            </ul>
                            <div className="tab-content-feedback">
                                <p>“Благодпря, постоянной возможности обучения я стара зарабатывать больше, а клиентов стало куда ”</p>
                                <p>Наталья Коваленко, Маникюр/Педикюр, Херсон.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>

            </div>
        );
    }

}

export default Help;
