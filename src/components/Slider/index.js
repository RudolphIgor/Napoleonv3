import React from 'react';
import style from './slider.module.css'
import {sliderArray} from "../../data/sliderArray";


const Index = (props) => {
    const styleblock = {
        background: `url(${props.slideArray.img}) center no-repeat`,
        height: '498px',
    }
    console.log(props)
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