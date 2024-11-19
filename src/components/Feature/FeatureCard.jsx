import React from 'react';
import featureList from './featureList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeatureCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto max-w-7xl py-8 px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {featureList.map((data) => (
          <div key={data.title} className="p-4">
            <div className="bg-white h-[600px] text-black rounded-xl shadow-md border-2 flex flex-col justify-between">
              <div className="h-56 rounded-t-xl bg-cover flex justify-center items-center">
                <img src={data.image} alt={data.title} className="h-56 w-60 rounded-md" />
              </div>
              <div className="flex flex-col justify-between items-center gap-4 p-4">
                <p className="text-xl font-semibold text-center underline uppercase">
                  {data.title}
                </p>
                <p className="text-center text-gray-500">{data.description}</p>
                <a
                  href="#"
                  className="mt-4 px-6 py-2 block font-semibold leading-4 text-center rounded-lg text-white bg-cyan-600 shadow-md hover:bg-cyan-700"
                >
                  {data.cta}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureCard;
