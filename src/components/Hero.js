import React from "react";
import Bags from "../assets/imgs/bags.png";

const Hero = () => {
  return (
    <div className="w-full bg-[#F9F1DE] h-[175.86px] flex justify-between items-center mt-8">
      <div className="flex items-center">
        <img src={Bags} alt="bag" />
      </div>
    </div>
  );
};

export default Hero;
