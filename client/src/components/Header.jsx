import React from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { BsInstagram, BsTiktok, BsFacebook } from "react-icons/bs";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/T5.png";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className=" header border-b-2 text-gray-950 justify-between py-2` bg-[#f19c48]">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <img
          className="h-20 w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 mx-auto"
          src={TikkaRotiPNG}
          alt=""
        />
      </Link>

      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to="/">Hem</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/menu"} as={"div"}>
          <Link to="/menu">Meny</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/info"} as={"div"}>
          <Link to="/info">About Us</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/book"} as={"div"}>
          <Link to="/book">Boka Oss</Link>
        </Navbar.Link>
      </Navbar.Collapse>

      <div className="flex gap-5  ">
        <a
          href="https://www.facebook.com/share/m3HRVk45wzmvQisQ/?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook className="h-6 w-6 hover:text-gray-600 " />
        </a>
        <aq
          href="https://www.instagram.com/tikkaroti?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="h-6 w-6  hover:text-gray-600" />
        </aq>
        <a
          href="https://www.tiktok.com/@tikkarotifoodtruck?_t=8qJYAo5WWfN&_r=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTiktok className="h-6 w-6  hover:text-gray-600" />
        </a>
      </div>
      <Navbar.Toggle />
    </Navbar>
  );
}
