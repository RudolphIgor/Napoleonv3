import React from 'react';
import clsx from "clsx";
import style from './index.module.css'
import {ReactComponent as Logo} from '../../img/logo.svg'
import Social from "../Header/Social";

const Index = () => {
    return (
        <footer className={clsx("container")}>
            <div className={clsx(style.wrapper)}>
                <div className={clsx(style.left)}>
                    <Logo/>
                    <Social/>
                </div>
                <div className={clsx(style.map)}>

                </div>
                <div className={clsx(style.contacts)}>
                    <div>
                        <span>
                            Адрес:
                        </span>
                        <span>
                            г. Абакан, ул. Пушкина, д 100
                        </span>
                    </div>
                </div>
                <div>
                    <span>
                            Телефон:
                    </span>
                    <a>
                        +7 903 326 36 366
                    </a>
                    <a>
                        +7 903 326 36 366
                    </a>
                </div>
                <div>
                    <span>
                            E-mail:
                    </span>
                    <a>
                        napoleon@mail.ru
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Index;