import React from "react";
import { Card, Button, Badge } from "flowbite-react";
import PakoraTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Pakora Tallrik.jpg";
import ChickenTikkaRulle from "../assets/TIKKA ROTI FOOD TRUCK/Chicken Tikka Rulle.jpg";
import SamosaTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Samosa Tallrik.jpg";
import SmashBurger from "../assets/TIKKA ROTI FOOD TRUCK/Smash Burger.webp";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex flex-col items-center p-6 bg-orange-50 min-h-screen">
      <h1 className="text-4xl font-bold text-orange-600 mb-8">Our Menu</h1>

      {/* Burgers Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Burgers
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Smash Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SmashBurger}
                alt="Pakora Platter"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Smash Burger</p>
              <p className="text-gray-600">
                Saftig, kryddad nötköttspatty pressad till perfektion och
                serverad i en mjuk bulle med färska pålägg och en speciell sås
                för en oförglömlig smakupplevelse.
              </p>
            </div>
          </div>

          {/* Smokey Barbeque */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Smokey Barbeque Burger</p>
              <p className="text-gray-600">
                En rökig och saftig nötköttspatty, grillad till perfektion och
                toppad med karamelliserad lök, smält ost och vår speciella
                BBQ-sås. Serveras i en mjuk bulle för den ultimata
                grillupplevelsen.
              </p>
            </div>
          </div>

          {/* Jalapeno Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Jalapeno Burger</p>
              <p className="text-gray-600">
                En het och kryddig hamburgare fylld med eldiga jalapeños, smält
                ost och en saftig köttpatty. Perfekt för den som gillar lite
                extra sting i varje tugga!
              </p>
            </div>
          </div>

          {/* Truffle Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Truffle Burger</p>
              <p className="text-gray-600">
                En lyxig hamburgare med en rik smak av tryffel, smält ost och
                saftig köttpatty. En perfekt kombination av elegans och smak som
                tar din burgarupplevelse till en ny nivå!
              </p>
            </div>
          </div>

          {/* Halloumi Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Halloumi Burger</p>
              <p className="text-gray-600">
                En krispig och gyllenstekt halloumiburgare med en saftig inre,
                toppad med färska grönsaker och smakrik sås. Perfekt för alla
                som älskar en vegetariskt burgare full av smak!
              </p>
            </div>
          </div>

          {/* Chipotle Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chipotle Burger</p>
              <p className="text-gray-600">
                En saftig burgare med en rökig och kryddig chipotlesås, toppad
                med krispiga salladsblad och smält ost. En smakexplosion med en
                härlig hetta för den som älskar lite extra sting i sin måltid!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Grekisk Streetfood Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Grekisk Streetfood
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Pita Gyros */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={ChickenTikkaRulle}
                alt="Chicken Tikka Rulle"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pita Gyros</p>
              <p className="text-gray-600">
                En smakrik pita med saftigt grillat kött, fräscha grönsaker och
                krämig tzatziki. Perfekt för en snabb och mättande måltid! Njut
                av en autentisk grekisk smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Souvlaki Chicken */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/lamb-karahi.jpg"
                alt="Lamb Karahi"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Souvlaki Chicken</p>
              <p className="text-gray-600">
                Saftiga bitar av grillad kyckling marinerad i aromatiska
                kryddor, serverade på spett. Perfekt för en snabb och smakrik
                måltid! Njut av en härlig grekisk upplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Soutzokakia */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/lamb-karahi.jpg"
                alt="Lamb Karahi"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold"> Soutzokakia</p>
              <p className="text-gray-600">
                Kryddiga köttbullar i en smakrik tomatsås, perfekt tillagad för
                en djup och mustig smak. Idealisk för en mättande middag! Upplev
                en autentisk grekisk klassiker med varje tugga!
              </p>
            </div>
          </div>

          {/* Pita Halloumi */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/lamb-karahi.jpg"
                alt="Lamb Karahi"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pita Halloumi</p>
              <p className="text-gray-600">
                Grillad halloumi inlindad i mjuk pita, fylld med fräscha
                grönsaker och en läcker sås. Perfekt för en vegetarisk måltid!
                Njut av en smakrik och härlig grekisk upplevelse!
              </p>
            </div>
          </div>

          {/* Gyros Tallrik */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/lamb-karahi.jpg"
                alt="Lamb Karahi"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Gyros Tallrik</p>
              <p className="text-gray-600">
                Saftigt gyroskött serverat på en generös tallrik med krispiga
                grönsaker, tzatziki och pitabröd. Perfekt för en mättande
                måltid! Få en autentisk smak av Grekland i varje tugga!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Indisk/Pakistanisk Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Indisk/Pakistani
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Chicken Tikka Rulle */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tikka Rulle</p>
              <p className="text-gray-600">
                Mör kyckling marinerad i kryddig tikka, rullad i mjukt bröd med
                fräscha grönsaker och sås. Perfekt för en smakfull och mättande
                måltid! Njut av en explosiv smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Chicken Tandoori Rulle */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tandoori Rulle</p>
              <p className="text-gray-600">
                Saftig kyckling marinerad i tandoori-kryddor, rullad i mjukt
                bröd med fräscha grönsaker och en krämig sås. Perfekt för en
                smakfull och mättande måltid! Njut av en autentisk indisk
                smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Pakora Vegetarisk Rulle */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pakora Vegetarisk Rulle</p>
              <p className="text-gray-600">
                Krispiga pakoras gjorda på färska grönsaker, rullade i mjukt
                bröd med fräscha grönsaker och smakrik sås. Perfekt för en lätt
                och mättande måltid! Njut av en härlig vegetarisk smakupplevelse
                i varje tugga!
              </p>
            </div>
          </div>

          {/* Pakora Vegan Rulle */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pakora Vegan Rulle</p>
              <p className="text-gray-600">
                Krispiga pakoras tillverkade av färska grönsaker och kryddor,
                rullade i mjukt bröd med fräscha grönsaker och smakrik vegansk
                sås. Perfekt för en lätt och mättande måltid! Njut av en läcker
                vegansk smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Chicken Tikka Tallrik */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tikka Tallrik</p>
              <p className="text-gray-600">
                Mör kyckling marinerad i aromatiska tikka-kryddor, serverad med
                krispiga grönsaker, ris och sås. Perfekt för en mättande måltid!
                Få en autentisk smak av Indien i varje tugga!
              </p>
            </div>
          </div>

          {/* Chicken Tandoori Tallrik */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tandoori Tallrik</p>
              <p className="text-gray-600">
                Saftig tandoori-marinerad kyckling, serverad med färska
                grönsaker, ris och en smakrik sås. Perfekt för en mättande
                måltid! Njut av en autentisk indisk upplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Pakora Gluten free Tallrik */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Pakora Gluten free Tallrik</p>
              <p className="text-gray-600">
                Krispiga pakoras gjorda på färska grönsaker, serverade med en
                fräsch sallad och smakrik sås. Perfekt för en lätt och mättande
                måltid! Njut av en härlig smakupplevelse utan gluten i varje
                tugga!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Mexikansk Streetfood Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Mexikansk Streetfood
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Beef Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Beef Tacos</p>
              <p className="text-gray-600">
                Grillade grönsaker och saftig köttfyllning, inlindade i mjuka
                tortillas och toppade med salsa och guacamole. Perfekta för en
                färgstark och smakfull måltid! Njut av en härlig fiesta av
                smaker i varje tugga!
              </p>
            </div>
          </div>

          {/* Fajita Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Fajita Tacos</p>
              <p className="text-gray-600">
                Grillade grönsaker och saftig köttfyllning, inlindade i mjuka
                tortillas och toppade med salsa och guacamole. Perfekta för en
                färgstark och smakfull måltid! Njut av en härlig fiesta av
                smaker i varje tugga!
              </p>
            </div>
          </div>

          {/* Quesadilla Chicken Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Quesadilla Chicken Tacos </p>
              <p className="text-gray-600">
                Saftig kyckling och smält ost mellan krispiga tortillas,
                inlindade med fräscha grönsaker. Perfekta för en smakfull och
                mättande måltid! Njut av en läcker fusion av smaker i varje
                tugga!
              </p>
            </div>
          </div>

          {/* Texas Chilli Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Texas Chilli Tacos</p>
              <p className="text-gray-600">
                Kryddig och smakrik chili fylld med bönor och kött, inlindad i
                mjuka tortillas. Perfekta för en mättande och värmande måltid!
                Njut av en äkta smak av Texas i varje tugga!
              </p>
            </div>
          </div>

          {/* Vegetarian Frijoles Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Vegetarian Frijoles Tacos </p>
              <p className="text-gray-600">
                Kryddiga bönor inlindade i mjuka tortillas, toppade med fräscha
                grönsaker och avokado. Perfekta för en lätt och smakrik måltid!
                Njut av en härlig vegetarisk smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Fish Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Fish Tacos</p>
              <p className="text-gray-600">
                Fräscha fiskfiléer stekta till perfektion, inlindade i mjuka
                tortillas med krispiga grönsaker och en zesty sås. Perfekta för
                en lätt och smakfull måltid! Njut av en läcker
                havsmatsupplevelse i varje tugga!
              </p>
            </div>
          </div>
        </div>
      </Card>
      {/* Asiatisk Streetfood Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Asiatisk Streetfood
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Crispigt Chicken Bao */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Crispigt Chicken Bao</p>
              <p className="text-gray-600">
                Mör kyckling med krispig yta, inlindad i mjuka bao-bröd och
                toppad med fräscha grönsaker och sås. Perfekta för en smakfull
                och lätt måltid! Njut av en asiatisk delikatess i varje tugga!
              </p>
            </div>
          </div>

          {/* Halloumi Bao */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Halloumi Bao</p>
              <p className="text-gray-600">
                Grillad halloumi i mjuka bao-bröd, fylld med fräscha grönsaker
                och en smakrik sås. Perfekta för en vegetarisk och lätt måltid!
                Njut av en härlig fusion av smaker i varje tugga!
              </p>
            </div>
          </div>

          {/* Tempura Bao */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Tempura Bao</p>
              <p className="text-gray-600">
                Krispiga tempurafyllda grönsaker inlindade i mjuka bao-bröd,
                toppade med en smakrik sås och fräscha grönsaker. Perfekta för
                en lätt och fräsch måltid! Njut av en läcker asiatisk
                smakupplevelse i varje tugga!
              </p>
            </div>
          </div>

          {/* Tofu Bao */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Tofu Bao</p>
              <p className="text-gray-600">
                Mjuk tofu marinerad och grillad, inlindad i mjuka bao-bröd med
                fräscha grönsaker och en smakrik sås. Perfekta för en
                växtbaserad och lätt måltid! Njut av en härlig smakupplevelse i
                varje tugga!
              </p>
            </div>
          </div>

          {/* Gyokatsu Bao*/}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Gyokatsu Bao</p>
              <p className="text-gray-600">
                Mör gyokatsu (panerad och friterad fisk) inlindad i mjuka
                bao-bröd, toppad med krispiga grönsaker och en läcker sås.
                Perfekta för en smakfull och unik måltid! Njut av en asiatisk
                delikatess i varje tugga!
              </p>
            </div>
          </div>

          {/* Yakisoba Nudlar */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Yakisoba Nudlar</p>
              <p className="text-gray-600">
                Wokade nudlar med färska grönsaker och smakrik sås, perfekt för
                en snabb och läcker måltid! Njut av en härlig asiatisk
                smakupplevelse i varje tugga!
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Link to="/book">
      <Button gradientDuoTone="pinkToOrange" className="mt-2">
        BOKA OSS
      </Button>
      </Link>
    </div>
  );
}
