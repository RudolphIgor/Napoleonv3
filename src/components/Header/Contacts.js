import React from 'react';
import {Link} from "react-router-dom";
import style from './index.module.css'

const Contacts = () => {
    return (
        <div className={style.contacts}>
            <Link className={style.phone} to={'tel:+79135444363'}> +7 913 544 43 63 </Link>
            <span>г. Абакан, ул. Пушкина 216п</span>
        </div>
    );
};

export default Contacts;