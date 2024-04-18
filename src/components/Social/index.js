import React from 'react';
import {ReactComponent as ImgWhatsapp} from '../../img/socia/whatsup.svg'
import {ReactComponent as ImgInstagram} from '../../img/socia/insta.svg'
import {ReactComponent as ImgTelegram} from '../../img/socia/telegram.svg'
import {Link} from "react-router-dom";
import style from "./index.module.css";
const Index = () => {
    return (

        <div className={style.social}>
            <Link to="https://wa.me/79135444363" target="_blank" rel="noopener noreferrer">
                <ImgWhatsapp className={style.slink} alt='whatsapp'/>
            </Link>
            <Link to={'https://www.instagram.com/pol_napoleon?igsh=MXdmaTU1MHdpbGFwNg=='} rel="nofollow noopener noreferrer" target="_blank">
                <ImgInstagram className={style.slink} alt='instagram'/>
            </Link>
            <Link to={"https://t.me/+79135444363"} rel="nofollow noopener noreferrer" target="_blank">
                <ImgTelegram className={style.slink} alt='telegram'/>
            </Link>
        </div>
    );
};

export default Index;