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
      <h1 className="text-4xl font-bold  mb-8">Vår Meny</h1>

      {/* Burgers Section */}
      <Card className="w-full max-w-6xl mb-6">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Street Burgers
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
              <p className="font-semibold">Smash Burger (NEXT LEVEL)</p>
              <p className="text-gray-600">
                Smashed nötfärs (2*100g), cheddarost, grillad jalapeños,
                guacamole, tortillachips, krispsallad & lätt rostat brioche
                bröd,,serverad med 9mm mcCain pommes frites.
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
                saftig nötbiff(2*100g), toppad med smält cheddarost, rökig
                barbecuesås, krispsallad, picklade rödlök & lätt rostad brioche
                bröd,,serverad med 9mm mcCain pommes frites.
              </p>
            </div>
          </div>

          {/* American Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">American Burger</p>
              <p className="text-gray-600">
                200 gram högrev, cheddarost, BBQ sås, krispsallad, karamalised
                lök, nice sliced tomater, lätt rostat brioche bröd,,serverad med
                9mm mcCain pommes frites.
              </p>
            </div>
          </div>

          {/* Mexican Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Vegetable Samosa"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Mexican Burger</p>
              <p className="text-gray-600">
                2*100 gram nötfärs , 2 *cheddarost, chipotledressing, picklade
                rödlök, krispsallad, nachochips, lätt rostat brioche
                bröd,,serverad med 9mm mcCain pommes frites.
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
                Grillad halloumi, original dressing, krispsallad, picklad
                rödlök, srirachasås & lätt rostad brioche bröd,,serverad med 9mm
                mcCain pommes frites.
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
          {/* Gyros i pitabröd */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={ChickenTikkaRulle}
                alt="Chicken Tikka Rulle"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Gyros i pitabröd</p>
              <p className="text-gray-600">
                Grillad kyckling gyros (olivolja, torkade oregano, citronjuice,
                vitlök) serveras i pitabröd med rödlök, tomat och isbergssallad,
                Tzatziki och pommes frites.
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
                Grillad kyckling spett marinerade ( olivolja, citronjuice,
                rosmarin, oregano, sött chilisås) serveras med pommes frites,
                pitabröd, grekisk sallad och tzatziki.
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
                Ugnsbakade biffar (lamm och nötfärs) serveras med pitabröd,
                pommes frites, grekisk sallad och tzatziki.
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
              <p className="font-semibold">Frasig halloumi i pitabröd</p>
              <p className="text-gray-600">
                Marinerad och stekt halloumi i panko serveras med pitabröd,
                grekisk sallad, pommes och tzatziki.
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
                Grillad kyckling gyros (olivolja, torkade oregano, citronjuice,
                vitlök) serveras med pommes frites, pitabröd rödlök, grekisk
                sallad och Tzatziki.
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
          {/* Tacos Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Tacos Burger (NEXT LEVEL)</p>
              <p className="text-gray-600">
                Smashed nötfärs, cheddarost, grillad jalapeños, BBQ sås,
                tortillachips, krispsallad & lätt rostat tortillabröd.
              </p>
            </div>
          </div>

          {/* Enchilada Pollo */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Enchilada Pollo</p>
              <p className="text-gray-600">
                Smörstekt kyckling serveras i majs tortillabröd med tacosås,
                majs och avokadosallad ( rödlök, limeskal, limesaft, jalapeños,
                koriander).
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
              <p className="font-semibold">Quesadilla Kyckling </p>
              <p className="text-gray-600">
                Smörstekt kyckling serveras i majs tortillabröd med guacamole,
                ost, rödlök, paprika, koriander och limesaft.
              </p>
            </div>
          </div>

          {/* Tacos special (Nötfärs) */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Tacos special (Nötfärs)</p>
              <p className="text-gray-600">
                Stekt nötfärs serveras i tortillabröd serveras med majs, rödlök,
                tomater, limesaft, paprika, chilipeppar, tacos salsa och nachos
                chips.
              </p>
            </div>
          </div>

          {/* Fajitas */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Fajitas </p>
              <p className="text-gray-600">
                Grillad kyckling i tortillabröd serveras med stekta grönsaker,
                guacamole, koriander och limesaft.
              </p>
            </div>
          </div>

          {/* Veggie Tacos */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Veggie Tacos</p>
              <p className="text-gray-600">
                Röda kidneybönor, picklade rödlök, tomat, avokado, koriander,
                jalapeños, limesaft, chilipeppar och feta ost.
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
          {/* Yakisoba Nudlar */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/gulab-jamun.jpg"
                alt="Gulab Jamun"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Yakisoba Nudlar</p>
              <p className="text-gray-600">
                Mör kyckling blandat med risnudlar samt färgglada grönsaker
                (paprika, morot, vårlök) sojasås, sesamolja.
              </p>
            </div>
          </div>

          {/* Kyckling Bao Buns*/}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Kyckling Bao Buns</p>
              <p className="text-gray-600">
                Grillad kyckling file serveras med picklade rödlök,
                gochujangpasta ( chilimajonäs), röstad sesamfrö, rödkål och
                tomat.
              </p>
            </div>
          </div>

          {/* Grilloumi Bao Buns */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src="https://example.com/kheer.jpg"
                alt="Kheer"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Grilloumi Bao Buns</p>
              <p className="text-gray-600">
                Grillad grönsaker ( paprika, aubergine, champinjoner), tomat,
                röstad lök med gochujangpasta (chilimajonäs).
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
          {/*Chicken Tikka Rulle */}
          {/* <div className="flex flex-col items-center">
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
          </div> */}

          {/* Chicken Tandoori Rulle */}
          {/* <div className="flex flex-col items-center">
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
          </div> */}

          {/* Pakora Vegetarisk Rulle */}
          {/* <div className="flex flex-col items-center">
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
          </div> */}

          {/* Pakora Vegan Rulle */}
          {/* <div className="flex flex-col items-center">
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
          </div> */}

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
              <p className="font-semibold">Chicken Tikka Tallrik (MILD)</p>
              <p className="text-gray-600">
                Grillad kycklingfilé med pommes frites, bröd, isbergssallad,
                rödlök, tomat & myntayoghurtsås.
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
              <p className="font-semibold">
                Chicken Tandoori Tallrik (KRYDDSTARK)
              </p>
              <p className="text-gray-600">
                Grillad kycklingfilé med pommes frites, bröd, isbergssallad,
                rödlök, tomat & myntayoghurtsås.
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
              <p className="font-semibold">
                Pakora Tallrik (Glutenfri/Vegetarisk/Veganskt alternativ)
              </p>
              <p className="text-gray-600">
                Friterade grönsaker (Spenat, blomkål, ärtor, lök) i kikärtsmjöl
                serveras med pommes frites, isbergssallad, tomat, rödlök och
                tamarindsås.
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
