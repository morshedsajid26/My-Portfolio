import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TextAnimation = () => {
  return (
    <div className="flex justify-center items-center  h-[100px]">
      <h1 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[72px] font-semibold text-[#252b33] dark:text-white font-pop">
        I'm
        <Typewriter
          words={[" Syed Neaz Morshed Sajid", " a Frontend Developer."]}
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
