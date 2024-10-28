import React, { useState } from "react";
import { Alert, Button, Label, Textarea, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/T5.png";
import { BsInstagram, BsTiktok, BsFacebook } from "react-icons/bs";


export default function BookUs() {
  const [formData, setformData] = useState({
    "First Name": "",
    "Last Name": "",
    Email: "",
    "Phone Number": "",
    Address: "",
    Menu: [],
    "Minimum Guests": "",
    "Maximum Guests": "",
    "Allergies and Special Diets": "",
    "Booking Date": "",
    "Booking Time": "",
    "Extra Additions": "",
    "Additional Information": "",
  });
  // console.log(formData);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showMenuOptions, setShowMenuOptions] = useState(false);

  const menuOptions = [
    "Burgers",
    "Grekisk Streetfood",
    "Indisk/Pakistani",
    "Mexikansk Streetfood",
    "Asiatisk Streetfood",
  ];

  const toggleMenuOptions = () => {
    setShowMenuOptions((prev) => !prev);
  };

  const handleMenuSelect = (option) => {
    setformData((prev) => {
      const newMenu = prev["Menu"].includes(option)
        ? prev["Menu"].filter((item) => item !== option) // Remove if already selected
        : [...prev["Menu"], option]; // Add if not selected
      return { ...prev, Menu: newMenu };
    });
  };

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset messages on new submission
    setErrorMessage("");
    setSuccessMessage("");

    try {
      setLoading(true);
      const response = await fetch("https://formspree.io/f/movqaddg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong, please try again later.");
      }

      setSuccessMessage(
        "Your booking has been submitted successfully. We will get back to you soon."
      );
      setformData({
        "First Name": "",
        "Last Name": "",
        Email: "",
        "Phone Number": "",
        Address: "",
        Menu: [],
        "Minimum Guests": "",
        "Maximum Guests": "",
        "Allergies and Special Diets": "",
        "Booking Date": "",
        "Booking Time": "",
        "Extra Additions": "",
        "Additional Information": "",
      });
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <p className="text-center text-3xl font-bold pb-4 mb-4">BOKA OSS</p>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-12">
        {/*Left Section*/}
        <div className="flex-1 ml-5 justify-center">
          {/* Contact Information */}
          <div className="mt-5  flex flex-col justify-center items-center">
            {/* Tikka Roti Logo */}
            <img
              src={TikkaRotiPNG}
              alt="Tikka Roti"
              className="h-32 w-32 md:h-40 md:w-40 lg:h-44 lg:w-44 mb-2"
            />

            {/* Additional Contact Info */}
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Phone:</strong> +46 123 456 789
            </p>
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Email:</strong> contact@tikkaroti.com
            </p>

            {/* Social Media Links */}
            <div className="mt-4 flex space-x-5 ">
              <a
                href="https://www.facebook.com/share/m3HRVk45wzmvQisQ/?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="h-6 w-6 hover:text-gray-600" />
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
          </div>
        </div>

        {/* Right Section - Booking Form */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="First Name" />
              <TextInput
                type="text"
                placeholder="John"
                id="First Name"
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
                value={formData["Address"]}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label value="Menu" />
              <TextInput
                type="text"
                placeholder="Select Menu Items"
                value={formData["Menu"].join(", ")}
                onClick={toggleMenuOptions}
                readOnly
              />
              {showMenuOptions && (
                <div className="mt-2 bg-white shadow-md rounded-lg p-3 border">
                  {menuOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleMenuSelect(option)}
                      className={`p-2 cursor-pointer rounded-md ${
                        formData["Menu"].includes(option)
                          ? "bg-orange-400 text-black "
                          : "hover:bg-blue-100"
                      }`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <Label value="Minimum Number" />
              <TextInput
                type="number"
                placeholder="Enter minimum number of guests"
                id="Minimum Guests"
                value={formData["Minimum Guests"]}
                onChange={handleChange}
                min={0}
                required
              />
            </div>
            <div>
              <Label value="Maximum Number" />
              <TextInput
                type="number"
                placeholder="Enter maximum number of guests"
                id="Maximum Guests"
                value={formData["Maximum Guests"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Allergies and Special Diets" />
              <Textarea
                placeholder="If any allergies/special diet, please specify"
                id="Allergies and Special Diets"
                value={formData["Allergies and Special Diets"]}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Booking Date and Time" />
              <TextInput
                type="date"
                id="Booking Date"
                value={formData["Booking Date"]}
                onChange={handleChange}
                className="mb-1"
                required
              />
              <TextInput
                type="time"
                id="Booking Time"
                value={formData["Booking Time"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Extra additions" />
              <Textarea
                placeholder="e.g., hostess, decoration, DJ, FT, platters, tablecloths, lanterns, serving staff"
                id="Extra Additions"
                value={formData["Extra Additions"]}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Additional Information" />
              <Textarea
                placeholder="Tell us more about your event"
                id="Additional Information"
                value={formData["Additional Information"]}
                onChange={handleChange}
              />
            </div>
            <Button gradientDuoTone="pinkToOrange" type="submit">
              {loading == true ? "Loading..." : " Överlämna"}
            </Button>
          </form>

          {errorMessage && (
            <Alert color="failure" className="mt-3">
              {errorMessage}
            </Alert>
          )}
          {successMessage && (
            <Alert color="success" className="mt-3">
              {successMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}
