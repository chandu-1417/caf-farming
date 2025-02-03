import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import amenity1 from './Images/ami-1.png';
import amenity2 from './Images/ami-2.png';
import amenity3 from './Images/ami-3.png';
import amenity4 from './Images/ami-4.png';
import amenity5 from './Images/ami-5.png';
import amenity6 from './Images/ami-6.png';

gsap.registerPlugin(ScrollTrigger);

const Amenities = () => {
    const headingRef = useRef(null);
    const contentRefs = useRef([]);

    useEffect(() => {
        // Heading Animation
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: { trigger: headingRef.current, start: 'top 80%', toggleActions: 'play none none none' } }
        );

        // Content Animation
        contentRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className='bg-gray-100 pt-[50px] pb-[80px]'>
            <div className="w-[100%] flex justify-start items-start flex-col mb-2 mt-[150px] pl-[70px]">
                <div className="flex flex-col items-start my-12 gap-2" ref={headingRef}>
                    <h1 className="font-normal text-2xl font-sans text-[#2AB939]">Farm Amenities & Resources</h1>
                    <h1 className="font-semibold text-[45px] font-sans leading-[60px] text-[#1F4E3D]">
                        Rent farmlands with all the essentials <br /> for efficient farming.
                    </h1>
                </div>
            </div>

            <div className="w-[85%] mx-auto h-[350px] flex flex-col justify-between">
                {/* Top Row */}
                <div className="h-[48%] w-[100%] flex justify-between">
                    {[
                        { img: amenity1, title: 'Irrigation System', desc: 'Drip, Rain Gun, Water-Fed irrigation for efficient farming.' },
                        { img: amenity2, title: 'Main Canal', desc: 'Reliable canal ensuring consistent irrigation water supply.' },
                        { img: amenity3, title: 'Water Storage', desc: '1.5+3 acres farm ponds, 10Cr+ liters capacity for irrigation.' },
                    ].map((item, index) => (
                        <div
                            key={index}
                            ref={(el) => (contentRefs.current[index] = el)}
                            className="h-[100%] w-[32.5%] rounded-2xl border-[1px] border-[#1F4E3D] flex items-center opacity-0"
                        >
                            <div
                                className="h-[96%] w-[40%] rounded-2xl ml-1"
                                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            <div className="flex flex-col gap-3 pl-2 w-[60%]">
                                <h1 className="text-2xl font-semibold text-[#1F4E3D] hover:text-[#2AB939]">{item.title}</h1>
                                <p className="pr-1 text-[14px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div className="h-[48%] w-[100%] flex justify-between">
                    {[
                        { img: amenity4, title: 'Pump House', desc: 'Ensures steady water flow for irrigation & farming.' },
                        { img: amenity5, title: 'Food Processing Units', desc: 'Modern units for farm-to-market efficiency.' },
                        { img: amenity6, title: 'Plant Nursery', desc: 'Healthy saplings for strong and sustainable growth.' },
                    ].map((item, index) => (
                        <div
                            key={index + 3}
                            ref={(el) => (contentRefs.current[index + 3] = el)}
                            className="h-[100%] w-[32.5%] rounded-2xl border-[1px] border-[#1F4E3D] flex items-center opacity-0"
                        >
                            <div
                                className="h-[96%] w-[40%] rounded-2xl ml-1"
                                style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            ></div>
                            <div className="flex flex-col gap-3 pl-2 w-[60%]">
                                <h1 className="text-2xl font-semibold text-[#1F4E3D] hover:text-[#2AB939]">{item.title}</h1>
                                <p className="pr-1 text-[14px]">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Amenities;
