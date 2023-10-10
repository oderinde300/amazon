import React from "react";
import spray from "../assets/imgs/spray.jpg";
import Book1 from "../assets/imgs/book1.jpg";
import Book2 from "../assets/imgs/book2.jpg";
import Book3 from "../assets/imgs/book3.jpg";
import Book4 from "../assets/imgs/book4.jpg";

const Product6 = () => {
  return (
    <div className="bg-[#E2E6E7] p-4 font-lato">
      <div className="bg-white">
        <div className="flex items-center p-4">
          <p className="text-[#0F11111] text-[21px] font-semibold pr-4">
            Top Sellers in Books for you
          </p>
        </div>
        <div className="bg-white flex justify-between items-center px-4 pb-8 overflow-hidden">
          <div>
            <img
              src={Book1}
              alt="furnitures"
              className="w-[133px] h-[200px] object-cover shrink mr-2"
            />
            <div className="flex items-center h-[24px]">
              <div className="bg-[#CC0A39] text-white rounded-sm px-4 py-2 mt-2 text-[12px]">
                <p>30% off</p>
              </div>
              <p className="text-[#CC0A39] font-[12px]">Deal</p>
            </div>
          </div>
          <img
            src={Book2}
            alt="furnitures"
            className="w-[133px] h-[200px] object-cover shrink mr-2"
          />

          <img
            src={Book3}
            alt="furnitures"
            className="w-[133px] h-[200px] object-cover shrink mr-2"
          />

          <img
            src={Book4}
            alt="furnitures"
            className="w-[133px] h-[200px] object-cover shrink mr-2"
          />
          <img
            src={Book1}
            alt="furnitures"
            className="w-[133px] h-[200px] object-cover shrink mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Product6;
