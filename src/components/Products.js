import React from "react";
import ImageComp from "./Image";
import Verse from "../assets/imgs/verse.jpg";
import Baby from "../assets/imgs/baby.jpg";
import Bag from "../assets/imgs/bag.jpg";
import Dress from "../assets/imgs/dress.jpg";
import Computer from "../assets/imgs/computer.jpg";
import Easy from "../assets/imgs/easy.jpg";

import Product from "./Product";

const Products = () => {
  return (
    <>
      <section className="bg-[#E2E6E7] text-gray-800 font-lato px-4 pt-8 flex md:flex-wrap">
        <Product
          image={Verse}
          title="Home and Kitchen Under $30"
          styles="flex-1 mr-4"
        />

        <Product image={Baby} title="Toys Under $30" styles="flex-1 mr-4" />

        <Product
          image={Dress}
          title="Dress Under $30"
          styles="hidden md:block md:flex-1 mr-4"
        />

        <div className="bg-white p-4 w-[312px] h-[420px] hidden lg:block lg:flex-1 ">
          <p className="pb-4 font-semibold text-[#0F1111] text-xl">
            Toys Under $30
          </p>
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <img
                src={Baby}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Baby Under $50</p>
            </div>
            <div>
              <img
                src={Dress}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Dress Under $50</p>
            </div>
            <div>
              <img
                src={Bag}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Bag Under $30</p>
            </div>
            <div>
              <img
                src={Computer}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Computer Under $50</p>
            </div>
          </div>

          <p className="py-8 text-[#007185] text-[13px]">Shop now</p>
        </div>
      </section>

      <section className="bg-[#E2E6E7] text-gray-800 font-lato px-4 pt-8 flex md:flex-wrap">
        <Product
          image={Computer}
          title="Computers and Accessories"
          styles="flex-1 mr-4"
        />
        <div className="bg-white p-4 w-[312px] h-[420px] mr-4 flex-1">
          <p className="pb-4 font-semibold text-[#0F1111] text-xl">
            Toys Under $30
          </p>
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <img
                src={Baby}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Baby Under $50</p>
            </div>
            <div>
              <img
                src={Dress}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Dress Under $50</p>
            </div>
            <div>
              <img
                src={Bag}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Bag Under $30</p>
            </div>
            <div>
              <img
                src={Computer}
                alt="furnitures"
                className="w-[129px] h-[115px] object-cover"
              />
              <p className="text-[#0F1111] text-[12px]">Computer Under $50</p>
            </div>
          </div>

          <p className="py-8 text-[#007185] text-[13px]">Shop now</p>
        </div>
        <Product
          image={Bag}
          title="Easy Returns"
          styles="hidden md:block md:flex-1 mr-4"
        />

        <Product
          image={Easy}
          title="Shop best-selling categories"
          styles="hidden lg:block lg:flex-1 "
        />
      </section>
    </>
  );
};

export default Products;
