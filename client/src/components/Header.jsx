import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsInstagram, BsTwitter, BsTiktok, BsFacebook } from "react-icons/bs";
import TikkaRotiPNG from '../assets/TIKKA ROTI FOOD TRUCK/logo 1.png';


export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" header border-b-2 text-gray-950 justify-between py-5 bg-[#f19c48]">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        {/* <span className="px-2 py-1 bg-gradient-to-r from-orange-500 via-amber-900 to-black rounded-lg text-white">
          Tikka
        </span>
        Roti */}
        <img 
          className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 mx-auto mb-4"
          src={TikkaRotiPNG} alt="" 
        />
      </Link>
      
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/menu"} as={"div"}>
          <Link to="/menu">Menu</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/info"} as={"div"}>
          <Link to="/info">Information</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/book"} as={"div"}>
          <Link to="/book">Book Us</Link>
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex gap-4">
        <Link to="">
          <BsFacebook className="h-7 w-7 hover:text-gray-600 sm:text-xl" />
        </Link>
        <Link to="https://www.instagram.com/tikkaroti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <BsInstagram className="h-7 w-7  hover:text-gray-600" />
        </Link>
        <Link to="">
          <BsTiktok className="h-7 w-7  hover:text-gray-600" />
        </Link>
      </div>
      <Navbar.Toggle />
      
    </Navbar>

    
  );
}
