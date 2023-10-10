import React from "react";

const SignIn = () => {
  return (
    <>
      <section className="bg-[#E2E6E7] text-gray-800 pt-8 flex md:flex-wrap w-full font-lato">
        <div className="bg-white w-full py-8">
          <div className="border border-[#EFEEEF] h-full flex flex-col items-center justify-center rounded-md px-12">
            <p className="mt-12 text-[13px] text-black font-medium">
              See personalized recommendations
            </p>
            <button className="bg-[#FFC636] text-[12px] px-24 py-2 rounded-sm my-2 font-semibold border border-[#F2BC45]">
              Sign in
            </button>
            <p className="mb-12 text-[11px] text-black font-medium">
              New Customer{" "}
              <span className="text-[#007185] text-[11px] font-normal cursor-pointer">
                Start here.
              </span>
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center w-full h-full text-white font-[13px] py-4 bg-[#374858] ">
        <p className="cursor-pointer">Back to top</p>
      </div>
    </>
  );
};

export default SignIn;
