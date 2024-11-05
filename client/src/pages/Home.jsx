import React from "react";
import { Link } from "react-router-dom";
import { Button, Card } from "flowbite-react";
import Carousel from "../components/Carousel";
import TikkaRotiPNG from "../assets/TIKKA ROTI FOOD TRUCK/T5.png";
import WB from "../assets/TIKKA ROTI FOOD TRUCK/WB.png";
import Volvo from "../assets/TIKKA ROTI FOOD TRUCK/Volvo.png";
import SFF from "../assets/TIKKA ROTI FOOD TRUCK/Streetfood festival.jpg";
import Uni from "../assets/TIKKA ROTI FOOD TRUCK/Uni.png";
import ViSom from "../assets/TIKKA ROTI FOOD TRUCK/ViSom.png";
import KK from "../assets/TIKKA ROTI FOOD TRUCK/KK.png";
import SRF from "../assets/TIKKA ROTI FOOD TRUCK/SRF.png";
import GFF from "../assets/TIKKA ROTI FOOD TRUCK/GFF.png";
import FoodTruck1 from "../assets/TIKKA ROTI FOOD TRUCK/2.jpg";
import FoodTruck2 from "../assets/TIKKA ROTI FOOD TRUCK/3.jpg";
import FoodTruck3 from "../assets/TIKKA ROTI FOOD TRUCK/4.jpg";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 s text-black">
        <img src={TikkaRotiPNG} alt="Tikka Roti Logo" className="h-80 w-80 mb-4" />
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

      {/* Carousel Section */}
      <section className="py-10 ">
        <h2 className="text-3xl font-bold text-center mb-6">Vår Food Truck</h2>
        <div className="mx-auto">
          <Carousel />
        </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-14">
            <img 
              src={WB} 
              alt="Warner Bros" 
              className="h-20 object-contain" 
            />
            <img 
              src={Volvo} 
              alt="Volvo Cars" 
              className="h-20 object-contain" 
            />
            <img 
              src={ViSom} 
              alt="Vi Som" 
              className="h-20 object-contain" 
            />
            <img 
              src={KK} 
              alt="KulturKalas" 
              className="h-20 object-contain" 
            />
            <img
              src={SFF}
              alt="Sweden Food Festival"
              className="h-20 object-contain"
            />
             <img
              src={SRF}
              alt="Sweden Rock Festival"
              className="h-20 object-contain"
            />
            <img
              src={GFF}
              alt="Goteborg film festival"
              className="h-20 object-contain"
            />
             <img
              src={Uni}
              alt="Sahlgrenska Uni"
              className="h-20 object-contain"
            />
          </div>
        </div>
      </section>

      <div className=" flex justify-center items-center my-8">
        <Link to="/info">
          <Button gradientDuoTone="pinkToOrange" className="mt-2">
            VARFÖR TIKKA ROTI?
          </Button>
        </Link>
      </div>
    </div>
  );
}
