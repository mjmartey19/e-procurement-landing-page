import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import './styles.css';

import { slides } from "./../constants";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Hero() {
  
  

  return (
    <section id="intro" className="mb-10 relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="intro-slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full" style={{ width: '100%' }}>
              <img src={slide.imgSrc} alt={slide.alt} className="w-full h-full object-cover" />
              <div className={`absolute inset-0 ${slide.bgOverlayColor} flex items-center justify-center`}>
                <div className="text-center text-white">
                  <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-2xl mb-8">{slide.subtitle}</p>
                  {index === 0 && slide.buttons && (
                    <div className="flex justify-center">
                      {slide.buttons.map((button, buttonIndex) => (
                        <a
                          key={buttonIndex}
                          href={button.url}
                          target='_blank'
                          className={`text-white px-8 py-3 rounded-full text-lg font-semibold ${button.bgColor || 'bg-blue-600'} ${button.hoverBgColor || 'hover:bg-blue-700'} transition duration-300 mr-4`}
                        >
                          {button.text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='absolute bottom-10 bg-gray-100/50 z-10 py-5 px-8'>
           <img src="/img/carisca.png" width={300}/>
        </div>
    </section>
  );
}

export default Hero;
