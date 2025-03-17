"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import { MoveLeft } from "lucide-react";

function Carousel() {
  return (
    <div className=" w-full h-full max-w-5xl mx-auto px-4 py-8">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-xl"
      >
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-96">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/BloomJuice.jpg" 
              alt="Slide 1" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#fef9e7] bg-opacity-40 z-10 text-black pointer-events-none">
              <ul>
                <li className='flex flex-row'> je m'appel lyes <MoveLeft /> </li>
                <li className='flex flex-row'> test test 456 456 <MoveLeft /> </li>
                <li className='flex flex-row'> test test 789 789 <MoveLeft /> </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-96">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/2.jpg" 
              alt="Slide 2" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#fef9e7] bg-opacity-40 z-10 text-black pointer-events-none">
              <ul>
                <li className='flex flex-row'> test test 123 123 <MoveLeft /> </li>
                <li className='flex flex-row'> test test 456 456 <MoveLeft /> </li>
                <li className='flex flex-row'> test test 789 789 <MoveLeft /> </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-gray-100 flex items-center justify-center rounded-lg h-96">
          <div className="relative w-full h-full overflow-hidden">
            <Image 
              src="/Images/3.jpg" 
              alt="Slide 3" 
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#fef9e7] bg-opacity-40 z-10 text-black pointer-events-none">
              <ul>
                <li className='flex flex-row'> test test 123 123 <MoveLeft /> </li>
                <li className='flex flex-row'> test test 456 456 <MoveLeft /> </li>
                <li className='flex flex-row'> test test 789 789 <MoveLeft /> </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;