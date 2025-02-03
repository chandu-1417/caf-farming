import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import count1 from "./Images/count1.svg";
import count4 from "./Images/count4.svg";
import count5 from "./Images/count5.svg";
import count6 from "./Images/count6.svg";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const countersRef = useRef([]);

  useEffect(() => {
    countersRef.current.forEach((counter, index) => {
      const targetValue = counter.dataset.target;
      const isDecimal = targetValue.includes("+");

      gsap.fromTo(
        counter,
        { innerText: 0 },
        {
          innerText: isDecimal ? targetValue : Math.floor(targetValue),
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            once: true, // Ensures animation triggers only once
            toggleActions: "play none none reverse",
          },
          snap: { innerText: 0.1 },
          onUpdate: function () {
            // For decimal values, allow smooth increment
            let currentValue = this.targets()[0].innerText;
            if (isDecimal && currentValue % 1 !== 0) {
              currentValue = currentValue.toFixed(1); // Rounding to one decimal point
            }
            counter.innerText = currentValue;
          },
        }
      );
    });
  }, []);

  return (
    <div className="absolute w-[83%] h-[180px] bg-white shadow-green-300 shadow-md top-[2920px] left-[120px] rounded-2xl flex justify-between">
      {/* HP Motors */}
      <div className="w-[22%] h-[100%] rounded-2xl flex flex-col justify-center items-center">
        <h1 ref={(el) => (countersRef.current[0] = el)} data-target="100" className="text-6xl font-bold">
          0
        </h1>
        <p className="flex text-xl items-center gap-2">
          <img src={count6} alt="" />
          HP Motors
        </p>
      </div>

      {/* Acres of Farm Pond */}
      <div className="w-[22%] h-[100%] rounded-2xl flex flex-col justify-center items-center">
        <h1 ref={(el) => (countersRef.current[1] = el)} data-target="4.5+" className="text-6xl font-bold">
          0
        </h1>
        <p className="flex text-xl items-center gap-2">
          <img src={count5} alt="" />
          Acres of Farm Pond
        </p>
      </div>

      {/* Litres Capacity Tanks */}
      <div className="w-[22%] h-[100%] rounded-2xl flex flex-col justify-center items-center">
        <h1 ref={(el) => (countersRef.current[2] = el)} data-target="10" className="text-6xl font-bold">
          0
        </h1>
        <p className="flex text-xl items-center gap-2">
          <img src={count1} alt="" />
           Cr litres Capacity tanks
        </p>
      </div>

      {/* Feet Roads */}
      <div className="w-[22%] h-[100%] rounded-2xl flex flex-col justify-center items-center">
        <h1 ref={(el) => (countersRef.current[3] = el)} data-target="12" className="text-6xl font-bold">
          0
        </h1>
        <p className="flex text-xl items-center gap-2">
          <img src={count4} alt="" />
          feet roads
        </p>
      </div>
    </div>
  );
};

export default Banner;
