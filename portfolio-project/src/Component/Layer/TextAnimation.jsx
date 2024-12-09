import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TextAnimation = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-[64px] font-semibold text-[#ffffff] font-pop">
        I'm 
        <Typewriter
          words={[" Syed Neaz Morshed Sajid", " Frontend Developer.", " Freelancer."]}
          loop={Infinity}
          cursor
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={100}
          delaySpeed={700}
        />
      </h1>
    </div>
  );
};

export default TextAnimation;
