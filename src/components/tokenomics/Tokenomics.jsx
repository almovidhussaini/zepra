import React from "react";
import mainbackground from "../../assets/icons/mainbackground.png";
import tokenomics from "../../assets/icons/tokenomics.png";
import tokenzepra from "../../assets/icons/tokenzepra.png";
import faqzepra from "../../assets/icons/faqzepra.png";
import faq from "../../assets/icons/faq.png";
const Tokenomics = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mainbackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%", // Full width
      }}
      className="bg-blue-300 "
    >
      <h1
        style={{ fontFamily: "Kavoon" }}
        className="text-white text-center py-20 text-6xl"
      >
        Tokenomics
      </h1>
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div className="flex col-span-2 justify-center items-center">
          <div className=" md:px-6  px-1">
            <div className="relative">
              <img src={tokenomics} className="w-[360px] h-[250px]" />
              <p
                className="text-[#EA3102] absolute top-[6rem] xl:left-[4rem] left-[1rem] md:text-5xl text-2xl"
                style={{ fontFamily: "Kavoon" }}
              >
                Liquidity
              </p>
            </div>
            <div className="relative">
              <img src={tokenomics} className="w-[360px] h-[250px]" />
              <p
                className="text-[#EA3102] absolute top-[6rem] xl:left-[4rem] left-[1rem] md:text-5xl text-2xl"
                style={{ fontFamily: "Kavoon" }}
              >
                Network
              </p>
            </div>
          </div>
          <div className="px-6">
            <div className="relative">
              <img src={tokenomics} className="w-[360px] h-[250px]" />
              <p
                className="text-[#EA3102] absolute top-[6rem] xl:left-[4rem] left-[1rem] md:text-5xl text-2xl"
                style={{ fontFamily: "Kavoon" }}
              >
                Supply B1
              </p>
            </div>
            <div className="relative">
              <img src={tokenomics} className="w-[360px] h-[250px]" />
              <p
                className="text-[#EA3102] absolute top-[6rem] xl:left-[4rem] left-[1rem] md:text-5xl text-2xl"
                style={{ fontFamily: "Kavoon" }}
              >
                Text 1%
              </p>
            </div>
          </div>
        </div>

        <div>
          <img src={tokenzepra} className="w-[400px] h-[500px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20">
        <div className="flex   justify-center">
            <img src={faqzepra} className="2xl:h-[700px] h-[500px] w-[400px]" />
        </div>
        <div className="flex flex-col justify-center">
            <h1 style={{ fontFamily: "Kavoon" }} className="text-white text-6xl text-start ml-10">FAQ</h1>
            <div className="flex py-1 flex-col">
                <div className="relative">
                    <img src={faq} className="h-[90px] w-[600px]" />
                    <p className="absolute top-[20px] md:top-[30px] left-[3rem] text-white text-xl md:text-2xl" style={{ fontFamily: "Kavoon" }}>Q1# What FAQ or FAQ Page Includes</p>
                </div>
                <div className="relative my-3">
                    <img src={faq} className="h-[90px] w-[600px]" />
                    <p className="absolute top-[20px] md:top-[30px] left-[3rem] text-white text-xl md:text-2xl" style={{ fontFamily: "Kavoon" }}>Q1# What FAQ or FAQ Page Includes</p>
                </div>
                <div className="relative mb-3">
                    <img src={faq} className="h-[90px] w-[600px]" />
                    <p className="absolute top-[20px] md:top-[30px] left-[3rem] text-white text-xl md:text-2xl" style={{ fontFamily: "Kavoon" }}>Q1# What FAQ or FAQ Page Includes</p>
                </div>
                <div className="relative">
                    <img src={faq} className="h-[90px] w-[600px]" />
                    <p className="absolute top-[20px] md:top-[30px] left-[3rem] text-white text-xl md:text-2xl" style={{ fontFamily: "Kavoon" }}>Q1# What FAQ or FAQ Page Includes</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
