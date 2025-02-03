import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import chooseImg from './Images/choose.png';
import food1 from './Images/f-food.png';
import food2 from './Images/l-food.png';
import food3 from './Images/t-food.png';

// ✅ Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const progressBar1Ref = useRef(null);
  const progressBar2Ref = useRef(null);
  const progressBar3Ref = useRef(null);
  const percentage1Ref = useRef(null);
  const percentage2Ref = useRef(null);
  const percentage3Ref = useRef(null);

  useEffect(() => {
    // ✅ Animate Progress Bars & Percentages ONLY on First Scroll
    const animateProgress = (barRef, percentageRef, value) => {
      gsap.fromTo(
        barRef.current,
        { width: '0%' },
        {
          width: `${value}%`,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none', // Runs only once
            once: true, // ✅ Ensures it animates only the first time
          },
        }
      );

      gsap.fromTo(
        percentageRef.current,
        { innerHTML: '0%' },
        {
          innerHTML: `${value}%`,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          scrollTrigger: {
            trigger: barRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true, // ✅ Ensures it animates only the first time
          },
        }
      );
    };

    animateProgress(progressBar1Ref, percentage1Ref, 95);
    animateProgress(progressBar2Ref, percentage2Ref, 98);
    animateProgress(progressBar3Ref, percentage3Ref, 90);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Why Choose Us
          </h2>
          <p className="text-4xl font-bold text-gray-800 mb-6">
            Advantages of Investing in Farmland
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-wrap items-center">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative z-1">
            <img src={chooseImg} alt="" className='w-[550px]' />
            <img src={food1} alt="" className="absolute top-[250px] -left-8" />
            <img src={food2} alt="" className="absolute top-[70px] left-[80px]" />
            <img src={food3} alt="" className="absolute bottom-[110px] left-[70px]" />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Farming is the only practice which got its origin in align with
              the man’s existence on earth and the only practice that continued
              along with human evolution for centuries, which will continue and
              required to flow its existence in future, for our future generations.
              Investing in land is always the safest and brightest option with
              lower risk and higher returns because land is flexible to use in many
              forms and had zero maintenance costs once you initially invested.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-green-600 font-medium">Farmland Values</span>
                  <span className="text-gray-500" ref={percentage1Ref}>0%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div
                    ref={progressBar1Ref}
                    className="h-3 bg-green-500 rounded-full"
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-green-600 font-medium">Customer Satisfaction</span>
                  <span className="text-gray-500" ref={percentage2Ref}>0%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div
                    ref={progressBar2Ref}
                    className="h-3 bg-green-500 rounded-full"
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-green-600 font-medium">Steady & Passive Income</span>
                  <span className="text-gray-500" ref={percentage3Ref}>0%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full">
                  <div
                    ref={progressBar3Ref}
                    className="h-3 bg-green-500 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
