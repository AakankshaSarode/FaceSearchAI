import React, { useState } from "react";
import logo from "../../assets/fslogo1.png";
import Button from "./Button";
import { MdClose, MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "#about" },
    { name: "Pricing", link: "#pricing" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative bg-transparent">
      <div
        className={`sticky top-0 z-50 w-full bg-transparent shadow-custom-shadow py-3 px-7 md:px-10`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white">
            <img className="pt-2 h-[70px] w-[120px]" src={logo} alt="Logo" />
          </div>

          {/* Hamburger Icon */}
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl cursor-pointer md:hidden text-white "
          >
            {open ? <MdClose /> : <MdOutlineMenu />}
          </div>

          {/* Links */}
          <ul
          className={`md:flex md:items-center md:relative absolute left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            open
              ? "top-20 bg-gray-900 pl-6 md:top-0 md:bg-transparent md:pl-0"
              : "top-[-400px] md:top-0"
          }`}  
          >
            {Links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  href={link.link}
                  className="text-white hover:text-cyan-400 duration-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <Button>Get Started</Button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
