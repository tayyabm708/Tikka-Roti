import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/logo 1.png";
import WB from "../assets/TIKKA ROTI FOOD TRUCK/WB logo.png";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 s text-black">
        <img src={TikkaRotiPNG} alt="Tikka Roti Logo" className="h-32 mb-4" />
        <h1 className="text-5xl font-bold mb-2 text-center items-center">
          Hyr vår foodtruck{" "}
        </h1>
        <p className="text-xl mb-4 items-center text-center">
          till ditt event, fester och bröllop
        </p>
        <Link to="/book">
          <Button gradientDuoTone="pinkToOrange" className="mt-2">
            BOKA OSS
          </Button>
        </Link>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Våra tjänster</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Service Card */}
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Food Truck Events 🚚</h3>
            <p className="text-gray-700 mb-4">
              Vi erbjuder en unik matupplevelse i Göteborg med vår fusion
              gourmetmat, inspirerad av smaker från hela världen. Från vår
              foodtruck serverar vi rätter som kombinerar det bästa av olika
              kök, perfekt anpassade för att ge dina smaklökar en minnesvärd
              resa.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Flexibla menyer anpassade efter din eventtyp</li>
              <li>Erfarna kockar för bästa kvalitet</li>
              <li>Mobil catering för alla typer av tillställningar</li>
            </ul>
            <Link to="/book">
              <Button gradientDuoTone="pinkToOrange" className="mt-2">
                Find Us
              </Button>
            </Link>
          </Card>

          {/* Second Service Card */}
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Catering Services ⛺</h3>
            <p className="text-gray-700 mb-4">
              Låt oss ta hand om maten till ditt nästa evenemang! Välj mellan
              "VI SERVERAR DIG" för en komplett upplevelse eller "DU TAR MED"
              för smidig takeaway. Oavsett vad du väljer, kan du vara säker på
              att du får utsökt mat och fantastisk service.
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Fullständig catering med professionell personal</li>
              <li>Alternativ för både buffé och serverad middag</li>
              <li>Specialanpassade menyer för olika kostbehov</li>
            </ul>
            <Link to="/book">
              <Button gradientDuoTone="pinkToOrange" className="mt-2">
                Learn More
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-10 ">
        <h2 className="text-3xl font-bold text-center mb-10">Våra Kunder</h2>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Replace the src with your logo paths */}
            <img src={WB} alt="Client Logo 1" className="h-20 object-contain" />
            <img
              src="/path/to/logo2.png"
              alt="Client Logo 2"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo3.png"
              alt="Client Logo 3"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo4.png"
              alt="Client Logo 4"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo5.png"
              alt="Client Logo 5"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo6.png"
              alt="Client Logo 6"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo6.png"
              alt="Client Logo 6"
              className="h-20 object-contain"
            />
            <img
              src="/path/to/logo6.png"
              alt="Client Logo 6"
              className="h-20 object-contain"
            />
            {/* Add more logos as needed */}
          </div>
        </div>
      </section>

      <div className=" flex justify-center items-center mb-10">
        <Link to="/info">
          <Button gradientDuoTone="pinkToOrange" className="mt-2">
            VARFÖR TIKKA ROTI?
          </Button>
        </Link>
      </div>
    </div>
  );
}
