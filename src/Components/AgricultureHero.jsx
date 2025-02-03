import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import logo from './Images/logo.png';
import quotes from './Images/quote-left.svg';
import { FaStar } from "react-icons/fa6";
import client from './Images/re1.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AgricultureHero = () => {
  useEffect(() => {
    // GSAP animation for the left image section (Logo)
    gsap.fromTo(
      '.left-image', 
      { opacity: 0, scale: 0.8, y: -50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.left-image',
          start: 'top 80%', // Trigger when 80% of the element is visible
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col lg:flex-row pl-12 h-[550px] items-center pb-[500px] pt-[300px]">
      {/* Left Image Section (35% width) */}
      <div className="lg:w-[35%] relative left-image">
        <div className="relative flex justify-center items-center">
          <img src={logo} alt="" />
        </div>
      </div>

      {/* Right Swiper Section (65% width) */}
      <div className="lg:w-[65%] px-10 flex items-center bg-white">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          <SwiperSlide>
            <div className="bg-green-50 mx-[35px] rounded-xl px-[50px] py-[50px] h-[400px] flex flex-col justify-between">
              <div className='flex justify-between'>
                <div><img src={quotes} alt="" /></div>
                <div className='flex gap-1'>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-gray-300 text-xl'/>
                </div>
              </div>
              <div>
                <p className='text-xl'>
                  Agriculture and farming are essential industries that involve
                  the cultivation of crops, raising of livestock, and production
                  of food and other agricultural products.
                </p>
              </div>
              <div className='flex gap-3 h-[70px]'>
                <div
                  className='w-[70px] h-[100%] rounded-lg'
                  style={{
                    backgroundImage: `url(${client})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div>
                  <h1 className='text-2xl font-semibold text-green-950'>Haney Cooper</h1>
                  <p>Ceo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-amber-50 mx-[35px] rounded-xl px-[50px] py-[50px] h-[400px] flex flex-col justify-between">
              <div className='flex justify-between'>
                <div><img src={quotes} alt="" /></div>
                <div className='flex gap-1'>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-gray-300 text-xl'/>
                </div>
              </div>
              <div>
                <p className='text-xl'>
                  Agriculture and farming are essential industries that involve
                  the cultivation of crops, raising of livestock, and production
                  of food and other agricultural products.
                </p>
              </div>
              <div className='flex gap-3 h-[70px]'>
                <div
                  className='w-[70px] h-[100%] rounded-lg'
                  style={{
                    backgroundImage: `url(${client})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div>
                  <h1 className='text-2xl font-semibold text-green-950'>Haney Cooper</h1>
                  <p>Ceo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-blue-50 mx-[35px] rounded-xl px-[50px] py-[50px] h-[400px] flex flex-col justify-between">
              <div className='flex justify-between'>
                <div><img src={quotes} alt="" /></div>
                <div className='flex gap-1'>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-amber-400 text-xl'/>
                  <FaStar className='text-gray-300 text-xl'/>
                </div>
              </div>
              <div>
                <p className='text-xl'>
                  Agriculture and farming are essential industries that involve
                  the cultivation of crops, raising of livestock, and production
                  of food and other agricultural products.
                </p>
              </div>
              <div className='flex gap-3 h-[70px]'>
                <div
                  className='w-[70px] h-[100%] rounded-lg'
                  style={{
                    backgroundImage: `url(${client})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                ></div>
                <div>
                  <h1 className='text-2xl font-semibold text-green-950'>Haney Cooper</h1>
                  <p>Ceo</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default AgricultureHero;
