import React from "react";
import Piggy from "../assets/imgs/piggy.jpg";
import Brush from "../assets/imgs/brush.jpg";
import Cream from "../assets/imgs/cream.jpg";
import Nail from "../assets/imgs/nail.jpg";
import Toy from "../assets/imgs/toy.jpg";
import Box from "../assets/imgs/box.jpg";

const Products2 = () => {
  return (
    <div className="bg-[#E2E6E7] p-4  font-lato">
      <div className="bg-white">
        <div className="flex items-center p-4">
          <p className="text-[#0F11111] text-[21px] font-semibold pr-4">
            Popular Gift in Baby
          </p>
          <p className="text-[14px] text-[#007185] ">Shop now</p>
        </div>
        <div className="bg-white flex justify-between items-center overflow-hidden">
          <img
            src={Piggy}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />
          <img
            src={Brush}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />

          <img
            src={Cream}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />

          <img
            src={Nail}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />

          <img
            src={Toy}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />

          <img
            src={Box}
            alt="furnitures"
            className="w-[206px] h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Products2;
