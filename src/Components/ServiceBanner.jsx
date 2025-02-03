import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import count1 from "./Images/count1.svg";
import count2 from "./Images/count2.svg";
import count3 from "./Images/count3.svg";

gsap.registerPlugin(ScrollTrigger);

const ServiceBanner = () => {
  useEffect(() => {
    // Animating headings
    gsap.fromTo(
      ".gallery-header",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".gallery-subheader",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-subheader",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animating service cards
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="w-[100%] flex justify-center items-center flex-col gallery-section mb-7 mt-[150px]">
      <div className="flex flex-col items-center my-12 gap-2">
        <h1 className="gallery-header font-normal text-2xl font-sans text-[#2AB939]">
          CLOUD FARMING
        </h1>
        <h1 className="gallery-subheader font-semibold text-[50px] text-center font-sans leading-[60px] text-[#1F4E3D]">
          Smart agriculture for a sustainable <br /> and efficient future.
        </h1>
      </div>
      <div className="services-container w-[82%] h-[200px] my-8 flex justify-between">
        {/* Irrigation System */}
        <div className="service-card w-[32%] h-[100%] rounded-3xl border-[1px] border-gray-400 flex items-center pl-2 gap-2">
          <div>
            <img src={count2} alt="" className="w-[200px]" />
          </div>
          <div className="w-[5px] h-[80%] bg-gray-400"></div>
          <div className="flex flex-col gap-3 pl-2">
            <h1 className="text-2xl font-semibold hover:text-[#2AB939]">
              Irrigation System
            </h1>
            <p className="pr-3 text-[14px]">
              Key Irrigation Systems Used in Cloud Farming are Drip Irrigation,
              Rain Gun Irrigation, Water-Fed Irrigation
            </p>
          </div>
        </div>
        {/* Monitoring System */}
        <div className="service-card w-[32%] h-[100%] rounded-3xl border-[1px] border-gray-400 flex items-center pl-2 gap-2">
          <div>
            <img src={count3} alt="" className="w-[200px]" />
          </div>
          <div className="w-[5px] h-[80%] bg-gray-400"></div>
          <div className="flex flex-col gap-3 pl-2">
            <h1 className="text-2xl font-semibold hover:text-[#2AB939]">
              Monitoring System
            </h1>
            <p className="pr-3 text-[14px]">
              Drones & Viber Systems, AI & Machine Learning for Real-Time Crop
              Monitoring, Mobile Application for Constant Monitoring
            </p>
          </div>
        </div>
        {/* Food Processing System */}
        <div className="service-card w-[33%] h-[100%] rounded-3xl border-[1px] border-gray-400 flex items-center pl-2 gap-2">
          <div>
            <img src={count1} alt="" className="w-[200px]" />
          </div>
          <div className="w-[5px] h-[80%] bg-gray-400"></div>
          <div className="flex flex-col gap-3 pl-2">
            <h1 className="text-2xl font-semibold hover:text-[#2AB939]">
              Food Processing System
            </h1>
            <p className="pr-3 text-[14px]">
              CAF Shall process the food that is being cultivated and make
              available to retail. Like Horticulture, Agriculture Food
              Processing, Dairy & Breeding
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
