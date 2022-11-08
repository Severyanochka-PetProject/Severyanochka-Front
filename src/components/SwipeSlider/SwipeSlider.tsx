import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './swipeSlider.scss';

import banner1 from '../../images/banner/banner1.svg';
import banner2 from '../../images/banner/slide2.png';

const SwipeSlider = () => {
    return (
        <div className='swipe-slider'>
            <Swiper
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide className="slide slide_1">
                    <img src={banner1} alt=""/>
                </SwiperSlide>
                <SwiperSlide className="slide slide_2">
                    <img src={banner1} alt=""/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwipeSlider;
