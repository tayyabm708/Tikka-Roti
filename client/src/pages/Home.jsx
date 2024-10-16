import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'flowbite-react';
import TikkaRotiPNG from '../assets/TIKKA ROTI FOOD TRUCK/logo 1.png';

export default function Home() {
  return (
    <div >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 s text-black">
        <img src={TikkaRotiPNG} alt="Tikka Roti Logo" className="h-32 mb-4" />
        <h1 className="text-5xl font-bold mb-2 text-center items-center">Welcome to Tikka Roti!</h1>
        <p className="text-xl mb-4 items-center text-center">Delicious Indian-Pakistani food truck serving you the best flavors!</p>
        <Link to="/book">
        <Button gradientDuoTone="pinkToOrange" className="mt-2">
          Book Us
        </Button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 bg-white"> {/* Changed background color here */}
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Adjusted grid columns */}
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Catering Services</h3>
            <p>Perfect for events, parties, and gatherings. Customized menu available!</p>
            <Button gradientDuoTone="pinkToOrange" className="mt-2">Learn More</Button>
          </Card>
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold">Food Truck Events</h3>
            <p>Join us at local events for a taste of our delicious menu.</p>
            <Button gradientDuoTone="pinkToOrange" className="mt-2">Find Us</Button>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className=" py-10">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
        <div className="max-w-3xl mx-auto px-4">
          <blockquote className="italic text-gray-600 mb-4">
            "The food was absolutely delicious! Best catering experience I've ever had!"
          </blockquote>
          <p className="font-semibold text-right">- John D.</p>
        </div>
        <div className="max-w-3xl mx-auto px-4">
          <blockquote className="italic text-gray-600 mb-4">
            "Tikka Roti is our go-to for events! Highly recommended!"
          </blockquote>
          <p className="font-semibold text-right">- Sarah L.</p>
        </div>
      </section>
    </div>
  );
}