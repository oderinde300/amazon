import React from "react";

const Product = ({ title, image, alt = "images", styles }) => {
  return (
    <div className={`bg-white p-4 w-[312px] h-[420px] ${styles} font-lato`}>
      <p className="pb-4 font-semibold text-[#0F1111] text-xl">{title}</p>
      <img src={image} alt={alt} className="w-[280px] h-[303px] object-cover" />
      <p className="py-8 text-[#007185] text-[13px]">Shop now</p>
    </div>
  );
};

export default Product;
