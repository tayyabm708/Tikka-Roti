import React from "react";
import FoodTruck1 from "../assets/TIKKA ROTI FOOD TRUCK/22.png";
import FoodTruck2 from "../assets/TIKKA ROTI FOOD TRUCK/11.png";
import FoodTruck3 from "../assets/TIKKA ROTI FOOD TRUCK/33.png";

const images = [FoodTruck1, FoodTruck2, FoodTruck3];

export default function FoodTruckGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10">
      {images.map((image, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-none">
          <img
            src={image}
            alt={`Food Truck ${index + 1}`}
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}
