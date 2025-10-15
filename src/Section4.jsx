import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useContext, useState } from "react";
import ItemsContext from "./ItemsContext";
import Card from "./Card";

// import required modules
import { Navigation } from 'swiper/modules';
const Section4 = () => {
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
    <section className='section4'>
        <div className="sec4head">
            <h1>Popular Picks</h1>
            <p>Unmatched design—superior performance and customer satisfaction in one.</p>
        </div>
        <div className="sec4slider">
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
    </section>
  )
}

export default Section4