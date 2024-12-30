import React from 'react';
import zeprafooter from '../../assets/icons/zeprafooter.png'
import robot from '../../assets/icons/robot.png';
import x from '../../assets/icons/x.png'
import telegram from '../../assets/icons/telegram.png'

const Footer = () => {
    return (
        <div className='bg-[#0790B0]'>
            <div className='grid grid-cols-1 md:grid-cols-2 px-10 md:px-24 pt-10'>
                <div className='justify-center  flex flex-col'>
                    <h1 className='text-white text-3xl' style={{fontFamily:'Kavoon'}}>ZebraFi</h1>
                    <p className='text-white text-xl'style={{fontFamily:'Kavoon'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate atque commodi aliquid ab debitis aperiam voluptatem. A molestiae enim labore itaque consequuntur ex voluptate.</p>
                </div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <img src={zeprafooter} className='h-[290px] w-[270px]'/>
                    <h1 className='text-white text-2xl'style={{fontFamily:'Kavoon'}}>Follow Us</h1>
                    <div className='flex gap-2'>
                        <img src={telegram} className='h-[29px] w-[29px]' />
                        <img src={x} className='h-[29px] w-[29px]' />
                        <img src={robot} className='h-[29px] w-[29px]' />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;