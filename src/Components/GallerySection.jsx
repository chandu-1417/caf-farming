import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gallery1 from './Images/gal-1.png';
import gallery2 from './Images/gal-2.png';
import gallery3 from './Images/gal-3.png';
import gallery4 from './Images/gal-4.png';
import gallery5 from './Images/gal-5.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const GallerySection = () => {
  useEffect(() => {
    // Animating the gallery text on scroll
    gsap.fromTo(
      '.gallery-header',
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-header',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      '.gallery-subheader',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-subheader',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animating the images on scroll
    gsap.fromTo(
      '.gallery-image',
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="w-[100%] flex justify-center items-center flex-col gallery-section pb-[250px] bg-gray-100">
      <div className="flex flex-col items-center my-12 gap-2">
        <h1 className="gallery-header font-normal text-2xl font-sans text-[#2AB939]">
          OUR GALLERY
        </h1>
        <h1 className="gallery-subheader font-semibold text-[50px] text-center font-sans leading-[60px] text-[#1F4E3D]">
          Find Your Perfect Farming <br /> Space Today!
        </h1>
      </div>
      <div className="w-[85%] h-[800px] flex flex-col justify-between">
        <div className="h-[49%] w-[100%] flex justify-between">
          {/* First Image */}
          <div className="group relative w-[58.5%] h-[100%] rounded-3xl">
            <div
              className="gallery-image w-full h-full rounded-3xl"
              style={{
                backgroundImage: `url(${gallery1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Rich & Fertile Soil</p>
            </div>
          </div>
          {/* Second Image */}
          <div className="group relative w-[40%] h-[100%] rounded-3xl">
            <div
              className="gallery-image w-full h-full rounded-3xl"
              style={{
                backgroundImage: `url(${gallery2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Ready for Cultivation</p>
            </div>
          </div>
        </div>

        <div className="h-[49%] w-[100%] flex justify-between">
          {/* Third Image */}
          <div className="group relative w-[32.5%] h-[100%] rounded-3xl">
            <div
              className="gallery-image w-full h-full rounded-3xl"
              style={{
                backgroundImage: `url(${gallery3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Perfect for Crops</p>
            </div>
          </div>
          {/* Fourth Image */}
          <div className="group relative w-[32.5%] h-[100%] rounded-3xl">
            <div
              className="gallery-image w-full h-full rounded-3xl"
              style={{
                backgroundImage: `url(${gallery4})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-2xl font-bold">Water Storage</p>
            </div>
          </div>
          {/* Fifth Image with Button */}
          <div className="w-[32.5%] h-[100%] flex flex-col justify-between">
            <div className="group relative w-[100%] h-[78%] rounded-3xl">
              <div
                className="gallery-image w-full h-full rounded-3xl"
                style={{
                  backgroundImage: `url(${gallery5})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-2xl font-bold">Eco-Friendly Space</p>
              </div>
            </div>
            <div className="w-[100%] h-[16%] bg-[#2AB939] font-serif text-white tracking-widest rounded-xl flex justify-center items-center text-xl cursor-pointer">
              View All Projects
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
