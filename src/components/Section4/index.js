import React from 'react';
import clsx from "clsx";
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'
import Promotion from "../Promotion";
import style from "./insex.module.css"

const Index = () => {
    return (
        <section className={clsx('container', 'section')}>
            <h2 className={clsx('sectionTitle')}>
                акции
            </h2>
            <div className={clsx(style.wrapper)}>

                <swiper-container slides-per-view="4">
                    <swiper-slide>
                        <Promotion/>
                    </swiper-slide>
                    <swiper-slide>
                        <Promotion/>
                    </swiper-slide>
                    <swiper-slide>
                        <Promotion/>
                    </swiper-slide>
                    <swiper-slide>
                        <Promotion/>
                    </swiper-slide>
                </swiper-container>
            </div>

        </section>
    );
};

export default Index;