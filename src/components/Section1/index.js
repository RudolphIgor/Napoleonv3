import React from 'react';
import {Autoplay, EffectFade} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import Slider from "../Slider";
import {sliderArray} from "../../data/sliderArray";

const Index = () => {
    return (
        <div>
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
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