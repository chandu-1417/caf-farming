import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ScrollingTextGSAP = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: "-50%", // Move halfway to create seamless effect
      duration: 30, // Adjust speed
      repeat: -1,
      ease: "linear",
    });
  }, []);

  return (
    <div className="w-full text-green-700 py-4 overflow-hidden relative flex items-center py-10">
      {/* Seamless duplicated text for infinite scrolling */}
      <div className="flex whitespace-nowrap" ref={marqueeRef}>
        <p className="text-[100px] font-bold uppercase px-20">
          Rent Farmlands with Advanced Irrigation, Water Storage & Food Processing Units
        </p>
        <p className="text-[100px] font-bold uppercase px-20">
          Rent Farmlands with Advanced Irrigation, Water Storage & Food Processing Units
        </p>
      </div>
    </div>
  );
};

export default ScrollingTextGSAP;
