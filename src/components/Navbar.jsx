import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; 
import { Link as ScrollLink } from "react-scroll"; 
import { navLinks } from "./../constants";

import { menu, close } from "../assets";

function Header() {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className={`sm:py-[26px] py-[20px] lg:px-[50px] md:px-[30px] px-[20px] flex justify-between items-center fixed z-50 bg-white w-full`}>
        <RouterLink
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="text-2xl font-bold text-blue-600">E-Procurepro</h1>
        </RouterLink>

        <ul className="list-none hidden md:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}      
            >
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-50} 
                className={`${
                active === link.title ? "text-blue-600" : "text-gray"
              } hover:text-blue-600 md:text-[17px] text-[15px] font-normal cursor-pointer`}
           
                activeClass="text-blue-600"
                spy={true}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center cursor-pointer">
          <img src={menu} alt="menu" onClick={() => setToggle(!toggle)} />
        </div>
      </div>

      {/* Mobile version */}
      <div
        className={`${
          !toggle ? "left-[-100%]" : "block"
        } bg-white px-3 py-8 h-screen fixed top-0 left-0 lg:hidden transition-all duration-900 w-80 z-50 shadow-md`}
      >
        <div className="flex justify-between items-center w-full px-2 cursor-pointer">
        <h1 className="text-2xl font-bold text-blue-600">E-Procurepro</h1>
          <img src={close} width={15} alt="close" onClick={() => setToggle(!toggle)} />
        </div>
        
        <ul className="list-none w-full mt-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-blue-600" : "text-black"
              } hover:text-blue-600 text-[17px] font-normal cursor-pointer flex justify-center py-5 border-y-[0.7px] border-[#dfe9e5]`}
              onClick={() => {
                setActive(link.title);
                setToggle(false);
              }}
            >
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                offset={-70} // Adjust this value based on your header height
                className={`${
                  active === link.title ? "text-blue-600" : "text-black"
                }`}
                activeClass="text-blue-600"
                spy={true}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
