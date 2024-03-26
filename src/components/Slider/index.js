import React from 'react';
import style from './index.module.css'

const Index = (props) => {
    const styleblock = {
        background: `url(${props.slideArray.img}) center no-repeat`,
        height: "clamp(141px, 41.5vw, 498px)",

    }
    return (
        <div style={styleblock}>
            <div className={style.content}>
                <p className={style.title}>
                    {props.slideArray.text}
                </p>
                <button className={style.button}>
                    {props.slideArray.text_btn}
                </button>
            </div>
        </div>
    );
};

export default Index;