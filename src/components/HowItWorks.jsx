import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { steps } from "./../constants";


function HowItWorks() {
  const settings = {
    dots: true,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id="how-it-works" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-600">How It Works</h2>
        <Slider {...settings}>
          {steps.map((step, index) => (
            <div key={index} className="px-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                <img src={step.image} alt={step.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-sm font-semibold text-blue-500 mb-2 block">{step.step}</span>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HowItWorks;