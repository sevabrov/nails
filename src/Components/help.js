import React, { Component } from 'react';
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

class Help extends Component {

    render() {
        return (
            <div className="content">
                <h3 className="content-title">Контроль над приемом в ваших руках</h3>
                {/* <h5 className="content-sub-title">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев
                    более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык
                    публичных выступлений в домашних условиях.</h5> */}

                <Tabs className="tab-menu">
                    <TabList>
                        <Tab className="study-menu">Таймлайн</Tab>
                        <Tab className="feedback-menu">Прайс</Tab>
                        <Tab className="free-menu">Будь свободным</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="tab-content timeline">
                            <p  className="tab-content-title">Принимай клиентов в удобное для себя время</p>
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
                            <p className="tab-content-title">Устанавливай свои цены</p>
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
                            <p  className="tab-content-title">Ваш кабинет - ваши правила</p>
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

            </div>
        );
    }

}

export default Help;
