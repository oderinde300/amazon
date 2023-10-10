import React from "react";
import ImageComp from "./Image";
import logo from "../assets/imgs/Amazon-Logo-PNG1.png";
// import { IoLocationOutline } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";

import { BsSearch } from "react-icons/bs";
import Cart from "../assets/imgs/cart.png";
import Account from "../assets/imgs/accounts.png";
import Deliver from "../assets/imgs/deliver.png";
import Returns from "../assets/imgs/returns.png";

const Navigation = () => {
  return (
    <section className="font-lato">
      <nav className="bg-[#131921] px-4 py-2 text-white flex items-center justify-between">
        <ImageComp image={logo} alt="logo" width="113px" height="50px" />
        <div>
          <ImageComp
            image={Deliver}
            alt="logo"
            width="80px"
            height="45px"
            styles="hover:border hover:border-white cursor-pointer hidden lg:block"
          />
        </div>
        <div className="hidden lg:flex w-[60%] h-[45px]">
          <div className="h-[45px] w-[55px] flex justify-center items-center bg-[#E7E7E6] rounded-l-md">
            <p className="text-black">All</p>
          </div>
          <input
            className="w-[80%] h-[45px] text-gray-600 px-4 outline-none"
            placeholder="Search Amazon"
          />
          <div className="h-[45px] flex justify-center items-center bg-[#92F4FF] rounded-r-md px-2">
            <BsSearch size={20} className="" color="black" />
          </div>
        </div>
        <ImageComp
          image={Account}
          alt="logo"
          width="100px"
          height="45px"
          styles="hover:border hover:border-white cursor-pointer hidden lg:block"
        />
        <ImageComp
          image={Returns}
          alt="logo"
          width="80px"
          height="45px"
          styles="hover:border hover:border-white cursor-pointer hidden lg:block"
        />
        <ImageComp
          image={Cart}
          alt="logo"
          width="80px"
          height="45px"
          styles="hover:border hover:border-white cursor-pointer"
        />
      </nav>

      <nav className="w-full h-[39px] bg-[#222E3E] text-white flex items-center px-4">
        <div className="flex items-center">
          <AiOutlineMenu size={20} />
          <p className="pl-2 text-sm">All</p>
        </div>
        <ul className="flex items-center text-sm">
          <li className="px-4">Today's Deal</li>
          <li className="px-4">Customer Service</li>
          <li className="px-4">Registry</li>
          <li className="px-4 hidden lg:block">Gift Cards</li>
          <li className="px-4 hidden lg:block">Sell</li>
        </ul>
        <p className="text-sm ml-auto hidden lg:block">Shop top categories</p>
      </nav>
    </section>
  );
};

export default Navigation;
