import React from 'react';
import {ReactComponent as IconClose} from "../../img/iconClose.svg";
import ReactDOM from "react-dom";
import style from './index.module.css';
import clsx from "clsx";


const Index = ({children}) => {
    return ReactDOM.createPortal(
        <div className={clsx(style.modal)}>
            <div className={clsx(style.modalContent)}>
                <button className={clsx(style.modalCloseButton)}>
                    <IconClose/>
                    {children}
                </button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Index;