import React from 'react';

const PopUp = ({open, translateData}) => {
    return (
            <div className={`modal-wrapper ${open ? "open" : ""}`}>
                <div className="modal-area">
                    <p className="modal-title">{translateData.popupReady}</p>
                    <p className="modal-text">{translateData.popupText}</p>
                    <p className="modal-footer">{translateData.popupFooter}</p>
                </div>
            </div>
    );
}

export default PopUp;
