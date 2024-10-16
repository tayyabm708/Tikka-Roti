import React, { useState } from "react";
import {
  Alert,
  Button,
  Label,
  Radio,
  Spinner,
  Textarea,
  TextInput,
} from "flowbite-react";
import { Link } from "react-router-dom";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/logo 1.png";

export default function BookUs() {
  const [formData, setformData] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    "Phone Number": "",
    Address: "",
    Menu: "",
    "Minimum Guests": "",
    "Maximum Guests": "",
    "Allergies and Special Diets": "",
    "Booking Date": "",
    "Booking Time": "",
    "Extra Additions": "",
    "Additional Information": "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  console.log(formData);

  const handleChange = (e) => {
    console.log(e.target.value);
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/movqaddg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        setErrorMessage("Something went wrong, please try again later.");
      }
      setSuccessMessage(
        "Your booking has been submitted successfully. We will get back to you soon"
      );
      setformData({
        "First Name": "",
        "Last Name": "",
        Email: "",
        "Phone Number": "",
        Address: "",
        Menu: "",
        "Minimum Guests": "",
        "Maximum Guests": "",
        "Allergies and Special Diets": "",
        "Booking Date": "",
        "Booking Time": "",
        "Extra Additions": "",
        "Additional Information": "",
      });
    } catch (error) {
      setErrorMessage("Something went wrong, please try again later.");
    }
  };
  return (
    <div className="min-h-screen mt-20">
      <p className="text-center text-3xl font-bold pb-4">
        {/* <span className="px-2 py-1 bg-gradient-to-r from-orange-500 via-amber-900 to-black rounded-lg text-white">
          Book
        </span> */}
        Book Us 
      </p>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5  ">
        {/*left*/}
        <div className="flex-1">
          {/* Contact Information */}
          <div className="mt-5">
            {/* Location */}
            <p className="text-md text-gray-600 dark:text-gray-400">
              <strong>Location:</strong> 123 Food Street, Stockholm, Sweden
            </p>

            {/* Phone Number */}
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Phone:</strong> +46 123 456 789
            </p>

            {/* Email */}
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Email:</strong> contact@tikkaroti.com
            </p>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/fluency/48/tiktok.png"
                  alt="Twitter"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>
        </div>

        {/*right*/}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="First Name" />
              <TextInput
                type="text"
                placeholder="John"
                id="First Name"
                name="first-name"
                value={formData["First Name"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Last Name" />
              <TextInput
                type="text"
                placeholder="Doe"
                id="Last Name"
                name="last-name"
                value={formData["Last Name"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="Email"
                name="email"
                value={formData["Email"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Phone Number" />
              <TextInput
                type="tel"
                placeholder="+46782591288"
                id="Phone Number"
                name="phone-number"
                value={formData["Phone Number"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Address" />
              <TextInput
                type="text"
                placeholder="Enter your booking address here"
                id="Address"
                name="address"
                value={formData["Address"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Menu" />
              <Textarea
                type="text"
                placeholder="eg., Tandoori Chicken Rulle, Chicken Tikka Rulle"
                id="Menu"
                name="menu"
                value={formData["Menu"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Minimum Number" />
              <TextInput
                type="number"
                placeholder="Enter minimum number of guests "
                id="Minimum Guests"
                name="minimum-guests"
                value={formData["Minimum Guests"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Maximum Number" />
              <TextInput
                type="number"
                placeholder="Enter maximum number of guests"
                id="Maximum Guests"
                name="maximum-guests"
                value={formData["Maximum Guests"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Allergies and Special Diets" />
              <Textarea
                type="text"
                placeholder="If any allergies/ special diet, please specify"
                id="Allergies and Special Diets"
                name="allergies-special-diets"
                value={formData["Allergies and Special Diets"]}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Booking Date and Time" />
              <TextInput
                className="pb-2"
                type="date"
                id="Booking Date"
                name="booking-date"
                value={formData["Booking Date"]}
                onChange={handleChange}
                required
              />
              <TextInput
                type="time"
                id="Booking Time"
                name="booking-time"
                value={formData["Booking Time"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Extra additions" />
              <Textarea
                type="text"
                className=""
                placeholder="eg., hostess, decoration, DJ, FT, platters, tablecloths, lanterns, serving staff"
                id="Extra Additions"
                name="extra-additions"
                value={formData["Extra Additions"]}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Additional Information" />
              <Textarea
                type="text"
                className=""
                placeholder="Tell us more about your event"
                name="additional-info"
                id="Additional Information"
                value={formData["Additional Information"]}
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="pinkToOrange" type="submit">
              Submit
            </Button>
            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
            {successMessage && (
              <Alert className="mt-5" color="success">
                {successMessage}
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
