import React from 'react';
import style from './index.module.css'
import clsx from "clsx";

const Index = () => {
    return (
        <div className={clsx(style.cardBody)}>
            <img className={clsx(style.image)} src="./img/promotions/gloryKansas2.jpg" alt="photo"/>
            <div className={clsx(style.wrapper)}>
                <h4 className={clsx(style.title)}>
                    Акция на линолеум</h4>
                <span className={clsx(style.label)}>
                01 ноября - 23 ноября
            </span>
                <p className={clsx(style.text)}>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века.
                </p>
            </div>

        </div>
    );
};

export default Index;