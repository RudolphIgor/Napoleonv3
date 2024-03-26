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
        <div className={clsx('section')}>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                // autoplay={{
                //     delay: 1000,
                //     disableOnInteraction: false
                // }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    sliderArray.map(item => {
                        return (
                            <SwiperSlide key={item.id}>
                                <Slider slideArray={item}/>
                            </SwiperSlide>
                        )
                    })

                }
            </Swiper>

        </div>
    );
};

export default Index;