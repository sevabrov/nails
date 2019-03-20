import React from 'react';

const What = () => {
    return (
            <div className="content">
                <h3 className="content-title">Что мне даст прием клиетов на <br/> L&B?</h3>
                <div className="content-area">
                    <div className="content-area--block">
                        <h4 className="more-clients">Больше клиентов</h4>
                        <p>Возможность принимать дополнительных клиентов в свободное время, мы даем возможность зарабатывать больше!</p>
                    </div>
                    <div className="content-area--block">
                        <h4 className="business-creating">Построение Бизнеса</h4>
                        <p>Возможность лично контролировать график, цены, условия приема. Это твой бизнес, и твое время.</p>
                    </div>
                    <div className="content-area--block">
                        <h4 className="feedback-communication">Обратная связь</h4>
                        <p>Общайся с клиентами на прямую,  получай обратную связь, как можно быстрыее, становись лучше.</p>
                    </div>
                </div>
            </div>
    );
}

export default What;
