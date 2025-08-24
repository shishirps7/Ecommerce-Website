import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './Hero.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';


const Hero = () => {
  return (
    <div className='Hero'>
        <Swiper className="HeroSwiper"
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
        <SwiperSlide>
          <div className="hero_main" style={{
      backgroundImage: "url(https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s1.webp?v=1748226426&width=1500)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
            <div>
                <h5>MODERN EVERYDAY LOOKS</h5>
                <h1>Soft Comfort Bold Looks</h1>
                <button className='whitebtn'>Shop Collection</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero_main wide" style={{
      backgroundImage: "url(https://demo-milano.myshopify.com/cdn/shop/files/fs_new_s2.webp?v=1748226426&width=1500)",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
            <div>
                <h5>ELEVATE YOUR STYLE</h5>
                <h1>Women's Fashion Collection</h1>
                <button className='whitebtn'>Shop Collection</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero