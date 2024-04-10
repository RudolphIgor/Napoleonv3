import React from 'react';
import style from './index.module.css'
import {NavLink} from "react-router-dom";
import clsx from "clsx";
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = (props) => {
    return (
        <nav className={clsx(style.nav)}>
            <ul className={style.nav__list}>
                {
                    props.title.map(items =>
                        <NavLink key={items.id} to={items.route}>
                            <li className={style.nav__item} >{items.title}</li>
                        </NavLink>
                    )
                }
            </ul>
        </nav>
    );
};

export default Nav;