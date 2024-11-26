import React from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import Certificate from "../assets/TIKKA ROTI FOOD TRUCK/Certificate.jpg";
import Catering from "../assets/TIKKA ROTI FOOD TRUCK/12.jpg";

export default function Information() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
        VARFÖR TIKKA ROTI?
      </h2>

      <p className="text-lg text-center mb-4 text-gray-600">
        Planerar du för födelsedag, företag, bröllop eller någon annan typ av
        sammankomst? Låt oss göra ditt evenemang minnesvärt med vår autentiska
        fusion gourmetmat – en smakupplevelse inspirerad av smaker från hela
        världen, levererad med exceptionell service!
      </p>

      <div className="flex flex-col justify-center items-center my-8">
        <img src={Certificate} alt="certificate" className=" h-100 w-80" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* First Card */}
        <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5 bg-white border rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Mat och Service av Högsta Kvalitet
          </h3>
          <p className="text-gray-700">
            Det bästa valet för ditt evenemang är att anlita vår foodtruck eller
            catering. Vi erbjuder ett brett utbud av rätter som kombinerar
            smaker och tekniker från hela världen, tillagade med färska
            ingredienser av högsta kvalitet. Oavsett om det gäller en stor fest,
            bröllop eller en företagsmiddag, är vi här för att ge dig en
            matupplevelse utöver det vanliga.
          </p>
        </Card>

        {/* Second Card */}
        <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5 bg-white border rounded-lg">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            En Oförglömlig Upplevelse
          </h3>
          <p className="text-gray-700">
            Vår passion för matlagning och service kommer att ge ditt evenemang
            det lilla extra som gör skillnad. Våra erfarna kockar och vänliga
            personal arbetar hårt för att säkerställa att varje gäst får en
            oförglömlig upplevelse. Vi erbjuder även anpassningsbara menyer för
            att tillgodose speciella önskemål och kostbehov.
          </p>
        </Card>
      </div>

      <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5 bg-white border rounded-lg mb-10">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">
          Tikka Roti: Din Smakupplevelse på Hjul
        </h3>
        <p className="text-gray-700">
          Tikka Roti började sin resa 2017, med ett uppdrag att erbjuda fusion
          gourmetmat till sammankomster av alla slag. Under åren har vi växt
          till en flotta av tre food trucks, alla utrustade för att leverera en
          unik kulinarisk upplevelse inspirerad av smaker från hela världen.
          Denna expansion har gjort det möjligt för oss att samtidigt betjäna
          flera kunder, så som under studentfiranden i Sverige och
          avslutningsceremonier. Oavsett om det är en festlig högtid, ett
          företagsevenemang eller något speciellt firande, är Tikka Roti stolta
          över att tillföra varje tillfälle en minnesvärd touch med fräscha,
          färgstarka rätter och enastående service.
        </p>
      </Card>

      {/* <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 p-5  border rounded-lg items-center"> */}

      {/* </Card> */}

      {/* Call to Action Section */}
      <div className="mt-10 text-center flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">
          Redo att Boka?
        </h3>
        <p className="mb-6 text-gray-600">
          Anlita Tikka Roti för ditt nästa evenemang och upplev en smakfull
          resa! Från planering till genomförande, vi är med dig varje steg på
          vägen för att säkerställa att ditt evenemang blir en succé.
        </p>

        <Link to="/book">
          <Button
            gradientDuoTone="pinkToOrange"
            size="lg"
            className="hover:bg-pink-700 transition-colors duration-300"
          >
            BOKA OSS NU
          </Button>
        </Link>
      </div>
    </div>
  );
}
