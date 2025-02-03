import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import headerImg from "./Images/Frame 1.png";
import heroImg from "./Images/hero1.png";
import { MdDoubleArrow } from "react-icons/md";

// ✅ Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // ✅ Create Refs for Animation Elements
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const greenLineRef = useRef(null);
  const paragraphRef = useRef(null);
  const listItem1Ref = useRef(null);
  const listItem2Ref = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    console.log("✅ GSAP Animations Loaded");

    // ✅ Text Animation Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heading1Ref.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      heading1Ref.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        heading2Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        greenLineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(
        paragraphRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.3"
      )
      .fromTo(
        [listItem1Ref.current, listItem2Ref.current],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      );

    // ✅ Image Animation (Slides in from right)
    gsap.fromTo(
      imageRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // ✅ Cleanup to prevent memory leaks
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div
        className="h-[100vh] bg-cover bg-center pt-[200px] px-12 flex relative"
        style={{
          backgroundImage: `url(${headerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ✅ Background Overlay for Readability */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative z-10 flex-1">
          <div className="mb-8 mt-[50px]">
            <h1 ref={heading1Ref} className="text-6xl font-bold text-white mb-4 opacity-100">
              Plowing the earth
            </h1>
            <div className="relative">
              <h1 ref={heading2Ref} className="text-6xl font-bold text-white opacity-100">
                harvesting hope
              </h1>
              {/* ✅ Green line below "harvesting hope" */}
              <div
                ref={greenLineRef}
                className="absolute -bottom-4 left-0 rounded-full w-[255px] h-2 bg-[#2AB939]"
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <p ref={paragraphRef} className="text-xl text-white mb-4 opacity-100">
              CAF promotes agricultural investment, offering returns through
              fertile lands and high-value crops like pomegranate and mango.
            </p>
            <div ref={listItem1Ref} className="flex items-center text-xl text-white mb-2 opacity-100">
              <MdDoubleArrow className="mr-2" />
              <p>Using advanced technologies.</p>
            </div>
            <div ref={listItem2Ref} className="flex items-center text-xl text-white opacity-100">
              <MdDoubleArrow className="mr-2" />
              <p>We ensure efficient monitoring, exports, and sustainable agriculture.</p>
            </div>
          </div>

          <div>
            <button
              ref={buttonRef}
              className="px-8 py-3 bg-[#2AB939] text-white text-xl font-semibold rounded-full flex items-center opacity-100"
            >
              View More
            </button>
          </div>
        </div>

        <div className="relative z-10 flex-1 flex justify-end">
          <img ref={imageRef} src={heroImg} alt="Hero" className="max-w-full h-auto opacity-100" />
        </div>
      </div>
    </>
  );
};

export default Header;
