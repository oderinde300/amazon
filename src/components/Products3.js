import React from "react";
import Dog from "../assets/imgs/dog.jpg";
import Pad from "../assets/imgs/pad.jpg";
import Deals from "../assets/imgs/deals.jpg";
import Key from "../assets/imgs/key.jpg";

import Product from "./Product";

const Products3 = () => {
  return (
    <section className="bg-[#E2E6E7] text-gray-800 font-lato px-4 pt-8 flex md:flex-wrap">
      <Product image={Dog} title="Shop Pet Supplies" styles="flex-1 mr-4" />

      <Product image={Pad} title="Kindle E Readers" styles="flex-1 mr-4" />

      <Product
        image={Deals}
        title="Deals in Tools and Home Improvement"
        styles="hidden md:block md:flex-1 mr-4"
      />
      <Product
        image={Key}
        title="Create with strip light"
        styles="hidden md:block md:flex-1 mr-4"
      />
    </section>
  );
};

export default Products3;
