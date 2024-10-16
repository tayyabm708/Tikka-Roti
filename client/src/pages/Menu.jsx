import React from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import PakoraTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Pakora Tallrik.jpg";
import ChickenTikkaRulle from "../assets/TIKKA ROTI FOOD TRUCK/Chicken Tikka Rulle.jpg";
import SamosaTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Samosa Tallrik.jpg";

export default function Menu() {
  return (
    <div className="flex flex-col items-center p-6 bg-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Our Menu</h1>

      {/* Appetizers Section */}
      <Card className="w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">Appetizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pakora Platter */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={PakoraTallrik}
                alt="Pakora Platter"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pakora Platter</p>
              <p className="text-gray-600">A crispy mix of chickpea battered vegetables served with tangy chutneys.</p>
              <Badge color="success">$5.99</Badge>
            </div>
          </div>

          {/* Vegetable Samosa */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Vegetable Samosa</p>
              <p className="text-gray-600">Crispy pastry filled with seasoned potatoes and peas, served with tamarind sauce.</p>
              <Badge color="success">$4.99</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Mains Section */}
      <Card className="w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">Mains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Chicken Tikka */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={ChickenTikkaRulle}
                alt="Chicken Tikka Rulle"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tikka</p>
              <p className="text-gray-600">Grilled marinated chicken served with naan and a side of yogurt sauce.</p>
              <Badge color="success">$12.99</Badge>
            </div>
          </div>

          {/* Lamb Karahi */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/lamb-karahi.jpg"
                alt="Lamb Karahi"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Lamb Karahi</p>
              <p className="text-gray-600">Tender lamb cooked in a rich tomato-based curry with aromatic spices.</p>
              <Badge color="success">$15.99</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Desserts Section */}
      <Card className="w-full max-w-2xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">Desserts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gulab Jamun */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Gulab Jamun</p>
              <p className="text-gray-600">Soft fried dough balls soaked in sweet saffron syrup.</p>
              <Badge color="success">$3.99</Badge>
            </div>
          </div>

          {/* Kheer */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-40 h-40 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Kheer</p>
              <p className="text-gray-600">A creamy rice pudding with cardamom and raisins.</p>
              <Badge color="success">$4.99</Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Button color="orange" size="lg" className="mt-8">
        Book Now
      </Button>
    </div>
  );
}
