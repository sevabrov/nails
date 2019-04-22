import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

import ScrollAnimation from 'react-animate-on-scroll';

const Help = ({translateData}) => {

    return (
        <div className="content">
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={100}> 
                <h3 className="content-title">{translateData.helpTitle}</h3>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true} delay={300}>
                <Tabs className="tab-menu">
                    <TabList>
                        <Tab className="study-menu">{translateData.helpTab1}</Tab>
                        <Tab className="feedback-menu">{translateData.helpTab2}</Tab>
                        <Tab className="free-menu">{translateData.helpTab3}</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-content timeline">
                            <p  className="tab-content-title">{translateData.helpTab1_title}</p>
                            <ul>
                                <li>Мы не навязываем никаких сроков по вашей минимальной занятости. Вы можете блокировать все неудобные для вас даты.</li>
                                <li>Устанавливайте свои правила для свободных дат. Минимальный срок бронирования на определенную услугу.</li>
                                <li>Уведомление перед приходом</li>
                                <li>Насколько заранее клиент может сделать бронь.</li>
                            </ul>
                            <div className="tab-content-feedback">
                                <p>“Благодпря, постоянной возможности обучения я стара зарабатывать больше, а клиентов стало куда ”</p>
                                <p>Наталья Коваленко, Маникюр/Педикюр, Херсон.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="tab-content price">
                            <p className="tab-content-title">{translateData.helpTab2_title}</p>
                            <ul>
                                <li>Вы сами устанавливаете ваш прайс лист, но в любой момент вы можете обратиться к нашему инструменту.</li>
                                <li>По желанию вы можете добавить специальные детали как:
                                    <span>Скрабирование рук или ног</span>
                                    <span>Массаж рук или ног</span>
                                    <span>Маска для рук</span>
                                </li>
                            </ul>
                            <div className="tab-content-feedback">
                                <p>“Благодпря, постоянной возможности обучения я стара зарабатывать больше, а клиентов стало куда ”</p>
                                <p>Наталья Коваленко, Маникюр/Педикюр, Херсон.</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="tab-content be-free">
                            <p  className="tab-content-title">{translateData.helpTab3_title}</p>
                            <ul>
                                <li>Для управления ожиданиями можно добавить правила кабинета.</li>
                                <li>Если мастер установил правила для кабинета, клиент должен принять их перед запросом на бронирование.</li>
                                <li>Например можно запретить курить или говорить по телефону, во время сеанса.</li>
                            </ul>
                            <div className="tab-content-feedback">
                                <p>“Благодпря, постоянной возможности обучения я стара зарабатывать больше, а клиентов стало куда ”</p>
                                <p>Наталья Коваленко, Маникюр/Педикюр, Херсон.</p>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </ScrollAnimation>

        </div>
    );
}

export default Help;
