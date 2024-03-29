import React from 'react';
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'
import Slider from "../Slider";
import {sliderArray} from "../../data/sliderArray";
import clsx from "clsx";

const Index = () => {
    return (
        <section className={clsx('section')}>
            <swiper-container slides-per-view="1">
                {sliderArray.map(item => {
                    return (
                        <swiper-slide key={item.id}>
                            <Slider slideArray={item}/>
                        </swiper-slide>
                    )
                })
                }
            </swiper-container>
        </section>
    );
};

export default Index;