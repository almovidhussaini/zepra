import React from 'react';
import mainbackground from '../../assets/icons/mainbackground.png';
import zepramain from '../../assets/icons/zepramain.png'

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${mainbackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',   // Full width
            
        }} className='bg-[#00B1DE] bg-opacity-85 mt-20  '>

            <div className='grid grid-cols-1 lg:grid-cols-3 px-24'>
                <div className='flex flex-col justify-center  col-span-2 mt-10 md:mt-0 md:py-11'>
                    <div>
                        <h1 className='text-white  text-3xl md:text-7xl' style={{fontFamily:'Kavoon'}}>Zebra: Stripes of Balance, Traits of Property</h1>
                    </div>
                    <div className='mt-10'>
                        <button className='bg-[#EA3102] px-4 py-2' style={{fontFamily:'Kavoon'}}>Buy $ZebraFi</button>
                    </div>

                </div>
                <div className='col-span-1 flex items-center justify-center lg:items-start lg:justify-start'>
                    <img src={zepramain} height="670px" width="500px" />
                   
                </div>

            </div>
            
            
        </div>
    );
};

export default Home;