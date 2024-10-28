import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsTiktok, BsFacebook } from "react-icons/bs";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/T5.png";

export default function FooterCom() {
  return (
    <Footer
      container
      className="border border-t-8 border-amber-600 bg-[#f19c48]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              {/* <span className="px-2 py-1 bg-gradient-to-r  from-orange-500 via-amber-900 to-black rounded-lg text-white">
                Tikka
              </span>
              Roti */}
              <img
                className="h-20 w-20  md:h-24 md:w-24 lg:h-32 lg:w-32  mb-4"
                src={TikkaRotiPNG}
                alt=""
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-black" title="Quick Links" />
              <Footer.LinkGroup col>
                <Link to="/">
                  <Footer.Link className="text-black">Hem</Footer.Link>
                </Link>
                <Link to="/menu">
                  <Footer.Link className="text-black">Meny</Footer.Link>
                </Link>
                <Link to="/info">
                  <Footer.Link className="text-black">About Us</Footer.Link>
                </Link>
                <Link to="/book">
                  <Footer.Link className="text-black">Boka oss</Footer.Link>
                </Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title className="text-black" title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="text-black" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="text-black" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright
            className="text-black"
            href="#"
            by="TikkaRoti"
            year={new Date().getFullYear()}
          />
          <div className="my-2">
            <p>
              Developed and Managed By
              <Link to="https://portfolio-webapplication-mern-264128a12e42.herokuapp.com/" target="_blank" rel="nonopener npreferrer">
                <span className="text-teal-600 hover:text-blue-700"> MMT</span>
              </Link>
            </p>
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              className="text-black hover:text-gray-600"
              href="https://www.facebook.com/share/m3HRVk45wzmvQisQ/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsFacebook}
            />
            <Footer.Icon
              className="text-black hover:text-gray-600"
              href="https://www.instagram.com/tikkaroti?igsh=YmQxYmVqcjFwczc0"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="text-black hover:text-gray-600"
              href="https://www.tiktok.com/@tikkarotifoodtruck?_t=8qJYAo5WWfN&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              icon={BsTiktok}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
