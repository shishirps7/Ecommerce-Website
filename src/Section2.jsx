import React from 'react'
// import './section2.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";
import Card from "./Card";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
const Section2 = () => {
    const { list } = useContext(ItemsContext);

  const [image, setimage] = useState(
    list.map(({ id, image }) => {
      return { id, image };
    })
  );
  const handleimage = (item, newimage) => {
    setimage((prev) =>
      prev.map((ele) => (ele.id == item.id ? { ...ele, image: newimage } : ele))
    );
  };
  return (
    <section className='section2'>
        <div className="section21">
            <div className="sec2head">
                <h1>Best Selling</h1>
                <p>Unmatched design—superior performance and customer satisfaction in one.</p>
            </div>
            <div className="sec2slider">
                <Swiper className="section2swiper"
        slidesPerView={4}
        // spaceBetween={30}
        navigation={true}   // ✅ enables next/prev buttons
        modules={[Navigation]} // ✅ use Navigation instead of Pagination
      >
        {list.map((e) => {
            const currentimg = image.find((ele) => ele.id == e.id);
            return (
              <SwiperSlide><Card key={e.id} e={e} handleimage={handleimage} currentimg={currentimg} /></SwiperSlide>
            );
          })}
      </Swiper>
            </div>
        </div>
        <div className="section22">
            <div className="sec22item">
                <div className="sec22img"><img src="https://demo-milano.myshopify.com/cdn/shop/files/fs_new_3.webp?v=1748226426&width=550" height="100%" width="100%" alt="" /></div>
                <div className="sec22detail">
                    <p className='sec22para1'>DAYTIME STAPLES</p>
                    <h1>Cool & Confident</h1>
                    <p className='sec22para2'>Crisp whites and sharp shades for your everyday power look.</p>
                    <p className='sec22anchor'><a>Shop Collection</a></p>
                </div>
            </div>
            <div className="sec22item">
                <div className="sec22img"><img src="//demo-milano.myshopify.com/cdn/shop/files/fs_new_4.webp?v=1748226426&amp;width=600" height="100%" width="100%" alt="" /></div>
                <div className="sec22detail">
                    <p className='sec22para1'>BOLD ESSENTIALS</p>
                    <h1>Golden Layers</h1>
                    <p className='sec22para2'>Soft knits in rich tones—effortlessly stylish, endlessly wearable.</p>
                    <p className='sec22anchor'><a>Shop Collection</a></p>
                </div>
            </div>
            <div className="sec22item">
                <div className="sec22img"><img src="//demo-milano.myshopify.com/cdn/shop/files/fs_new_5.webp?v=1748226869&amp;width=600" height="100%" width="100%" alt="" /></div>
                <div className="sec22detail">
                    <p className='sec22para1'>SAVE 10—30% ON STATEMENT PIECES</p>
                    <h1>Modern Ease Unfolded</h1>
                    <p className='sec22para2'>Effortless looks for every moment—from poolside to city strolls.</p>
                    <p className='sec22anchor'><a>Shop Collection</a></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section2