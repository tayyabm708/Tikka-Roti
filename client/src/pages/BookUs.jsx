import React, { useState } from "react";
import { Alert, Button, Label, Textarea, TextInput } from "flowbite-react";
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        setErrorMessage("Something went wrong, please try again later.");
        setLoading(false);
        setErrorMessage("");
        return;
      }
      setLoading(false);
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
      setSuccessMessage("");
    } catch (error) {
      setLoading(false);
      setErrorMessage("Something went wrong, please try again later.");
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <p className="text-center text-3xl font-bold pb-4">BOKA OSS</p>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Section */}
        <div className="flex-1">
          {/* Contact Information */}
          <div className="mt-5">
            {/* Google Maps Embed */}
            <iframe
              className="mb-4"
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272887.75788486586!2d11.564208266019989!3d57.70056378561675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464f8e67966c073f%3A0x4019078290e7c40!2sGothenburg%2C%20Sweden!5e0!3m2!1sen!2s!4v1729839134044!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>

            {/* Additional Contact Info */}
            <p className="text-md text-gray-600 dark:text-gray-400 mt-2">
              <strong>Phone:</strong> +46 123 456 789
            </p>
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
              <Textarea
                placeholder="e.g., Tandoori Chicken Rulle, Chicken Tikka Rulle"
                id="Menu"
                value={formData["Menu"]}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label value="Minimum Number" />
              <TextInput
                type="number"
                placeholder="Enter minimum number of guests"
                id="Minimum Guests"
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
