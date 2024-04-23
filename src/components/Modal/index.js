import React from 'react';
import ReactDOM from "react-dom";
import style from './index.module.css';
import clsx from "clsx";


const Index = ({children, closeIcon, closeBody}) => {
    return ReactDOM.createPortal(
        <div
            className={clsx(style.modal)}
            onClick={closeBody}
        >
            <div
                className={clsx(style.modalContent)}
                 onClick={event => event.stopPropagation()}
            >
                <button className={clsx(style.modalCloseButton)}>
                    {closeIcon}
                </button>
                {children}
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Index;