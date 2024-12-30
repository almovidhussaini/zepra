import React from "react";
import mainbackground from "../../assets/icons/mainbackground.png";
import zepraabout from "../../assets/icons/zepraabout.png";
import buy from '../../assets/icons/buy.png';
import buyzapra from '../../assets/icons/buyzapra.png';
import buycenter from '../../assets/icons/buycenter.png';
import buyend from '../../assets/icons/buyend.png'
const Aboutus = () => {
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
      <div id="about" className="grid grid-cols-1 md:grid-cols-2 p-6 items-center">
        <div className="flex justify-center items-end md:mt-16">
          <img src={zepraabout} height="500px" width="400px" />
        </div>
        <div className="">
          <h1 className="text-white text-5xl mb-3 " style={{fontFamily:'Kavoon'}}>About</h1>
          <div className="bg-white p-7 border-4 border-red-500 w-full max-w-md md:max-w-lg lg:max-w-xl">
            <p style={{fontFamily:'Jolly Lodger'}} className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab autem
              libero similique minima veritatis voluptas at sit obcaecati enim
              dolor sapiente exercitationem unde, necessitatibus nulla
              laudantium nemo aliquam dolores quasi!
            </p>
          </div>
        </div>
      </div>

      {/* how to buy */}
      <div className="mt-7" id="buy">
        <h1 className="text-center text-white text-5xl" style={{fontFamily:'Kavoon'}}>How to buy</h1>
        <p className="text-center text-white text-2xl mt-6" style={{fontFamily:'Kavoon'}}>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Autem iure porro officiis praesentium</p>
        <div className="grid grid-cols-1 md:grid-cols-3 p-14">
            <div className="relative flex justify-center">
                <img src={buy} className="w-[360px]  h-[420px]" />
                <img src={buyzapra} className="absolute left-[3rem] top-[0rem] xl:left-[8rem] 2xl:left-[11rem]" />
                <p className=" text-white absolute text-3xl md:text-4xl  md:w-[300px] w-[200px] xl:left-[4rem] top-[11rem] 2xl:left-[7rem]" style={{fontFamily:'Jolly Lodger'}}>Step 1: Connect Your Wallet Link your Crypto Wallet (Like Metamask or Trust wallet) to get started securly</p>
            </div>
            <div className="relative flex justify-center">
                <img src={buy} className="w-[360px]  h-[420px]" />
                <img src={buycenter} className="absolute left-[1rem] top-[0rem] xl:left-[5rem] 2xl:left-[9rem]" />
                <p className=" text-white absolute text-3xl md:text-4xl  md:w-[300px] w-[200px] xl:left-[4rem] top-[11rem] 2xl:left-[7rem]" style={{fontFamily:'Jolly Lodger'}}>Step 2: Fund Your Wallet Add some crypto(e.g ETH or BNB) to your wallet for swapping Pepe Meloni</p>
            </div>
            <div className="relative flex justify-center">
                <img src={buy} className="w-[360px]  h-[420px]" />
                <img src={buyend} className="absolute left-[5rem] top-[0rem] xl:left-[9rem] 2xl:left-[13rem]" />
                <p className=" text-white absolute text-3xl md:text-4xl  md:w-[300px] w-[200px] xl:left-[4rem] top-[11rem] 2xl:left-[7rem]" style={{fontFamily:'Jolly Lodger'}}>Step 3: Swap £ Hold Search for $PEPEMELONI, swap your Crypto, and become part of the meme revolution</p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutus;
