import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsTiktok, BsFacebook } from "react-icons/bs";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r  from-orange-500 via-amber-900 to-black rounded-lg rounded-lg text-white">
                Tikka
              </span>
              Roti
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/tayyabm708"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/muhammad-tayyab708"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between ">
          <Footer.Copyright
            href="#"
            by="TikkaRoti"
            year={new Date().getFullYear()}
          />
          <div className="items-center text-center">
            <p>Developed and Managed By 
              <Link to="https://portfolio-webapplication-mern-264128a12e42.herokuapp.com/">
              <span className="text-amber-600"> MMT</span>
            </Link></p>
           
          </div>
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/share/m3HRVk45wzmvQisQ/?mibextid=LQQJ4d" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/tikkaroti?igsh=YmQxYmVqcjFwczc0" icon={BsInstagram} />
            <Footer.Icon href="https://www.tiktok.com/@tikkarotifoodtruck?_t=8qJYAo5WWfN&_r=1" icon={BsTiktok} />
            {/* <Footer.Icon href="#" icon={BsTwitter} /> */}
          </div>
        </div>
      </div>
    </Footer>
  );
}