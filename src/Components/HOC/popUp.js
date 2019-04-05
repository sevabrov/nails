import React from 'react';

const PopUp = ({open}) => {
    return (
            <div className={`modal-wrapper ${open ? "open" : ""}`}>
                <div className="modal-area">
                    <p className="modal-title">Готово!</p>
                    <p className="modal-text">Будем держать Вас в курсе всех новостей а также вы первым узнаете о старте нащего сервиса)</p>
                    <p className="modal-footer">Мы Вас не подведём!</p>
                </div>
            </div>
    );
}

export default PopUp;
