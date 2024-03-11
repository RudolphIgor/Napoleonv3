import React from 'react';
import {Link} from "react-router-dom";
import style from './index.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Link className={style.phone} to={'tel:+79233544455'}> +7 923 354 44 55 </Link>
            <span>г. Абакан, ул. Пушкина 116</span>
        </div>
    );
};

export default Contacts;