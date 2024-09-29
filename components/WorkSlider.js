import React from 'react';
import { RxArrowTopRight } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';

export const serviceData = [
  {
    title : 'Expert Team',
    description : 'Our skilled professionals bring years of experience in web and app development, ensuring top-notch solutions tailored to your needs.',
    isFeaturted : true,
  },
  {
    title : 'Innovative Solutions',
    description : 'We leverage the latest technologies and industry best practices to deliver innovative, efficient, and effective digital solutions.',
    isFeaturted : true,
  },
  {
    title : 'Client-Centric Approach',
    description : 'Your satisfaction is our priority. We work closely with you throughout the development process to ensure your vision is realized.',
    isFeaturted : true,
  },
  {
    title : 'Quality Assurance',
    description : 'We adhere to rigorous quality standards to provide you with reliable, high-performance applications and websites.',
    isFeaturted : true,
  },
  {
    title: 'Scalable Architecture',
    description: 'We design and build scalable systems that grow with your business, ensuring your digital solutions can handle increasing demands and user loads.',
    isFeaturted: true,
  },
  {
    title: 'Ongoing Support',
    description: 'Our commitment does not end at launch. We provide continuous support and maintenance to keep your digital products running smoothly and up-to-date.',
    isFeaturted: true,
  }
];

export default function ServiceSlider() {
  return (
    <Swiper
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 1.5, // Slightly increase for mid-range devices
          spaceBetween: 15
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex flex-col gap-6 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* Title & Description */}
            <div className="mb-8">
              <div className="mb-2 text-lg font-bold">{item.title}</div>
              <p className="text-sm md:text-base max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* Arrow Icon */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
