import React from 'react';
import {ReactComponent as IconClose} from "../../img/iconClose.svg";

import style from './index.module.css';
import clsx from "clsx";

const Index = ({active, setActive}) => {
    return (
        <div className={active ? clsx(style.modal, style.active) : clsx(style.modal)} onClick={() => setActive(false)}>
            <div className={clsx(style.modalContent)} onClick={e => e.stopPropagation()}>
                <button className={clsx(style.modalCloseButton)}>
                    <IconClose/>
                </button>
            </div>
        </div>
    );
};

export default Index;