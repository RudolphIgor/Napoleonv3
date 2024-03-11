import React from 'react';
import {ReactComponent as Logo} from './../../img/logo.svg'
import style from "./index.module.css"
import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";


const Index = () => {
    //Массив пунктов меню
    const menuItems = [
        {
            id: 1,
            title: "Главная",
            route: '/'
        },
        {
            id: 2,
            title: "Каталог",
            route: '/'
        },
        {
            id: 3,
            title: "О нас",
            route: '/'
        },
        {
            id: 4,
            title: "Акции",
            route: '/'
        },
        {
            id: 5,
            title: "Отзывы",
            route: '/'
        },
    ]

    return (
        <header className={style.header__container}>
            <Social/>
            <Logo className={style.logo} />
            <Contacts/>
            <Nav title={menuItems}/>
        </header>
    );
};

export default Index;