import React, { useState } from 'react';
import zepraicon from '../../assets/icons/zepraicon.png'
import robot from '../../assets/icons/robot.png'
import telegram from '../../assets/icons/telegram.png'
import x from '../../assets/icons/x.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#00B1DE] dark:bg-gray-900 fixed w-full z-20  top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={zepraicon} className="h-16" alt="Logo" />
          
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <img src={telegram} className='h-10' />
          <img src={x} className='h-10 px-4' />
          <img src={robot} className='h-10' />
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white  rounded  "
                aria-current="page"
                style={{fontFamily:'Kavoon'}}
                onClick={() =>setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3  rounded   text-white    "
                style={{fontFamily:'Kavoon'}}
                onClick={() =>setIsOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#buy"
                className="block py-2 px-3  rounded text-white"
                style={{fontFamily:'Kavoon'}}
                onClick={() =>setIsOpen(false)}
              >
                How to Buy
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="block py-2 px-3 rounded text-white  "
                style={{fontFamily:'Kavoon'}}
                onClick={() =>setIsOpen(false)}
              >
                Tokenomics
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="block py-2 px-3 rounded text-white  "
                style={{fontFamily:'Kavoon'}}
                onClick={() =>setIsOpen(false)}
              >
                Faq
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
