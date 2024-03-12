import React from 'react';
import {ReactComponent as Logo} from './../../img/logo.svg'
import style from "./index.module.css"
import Social from "./Social";
import Contacts from "./Contacts";
import Nav from "./Nav";
import {menuItems} from "../../data/menuItems"


const Index = () => {
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