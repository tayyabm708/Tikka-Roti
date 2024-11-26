import React from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import SamosaTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Samosa Tallrik.jpg";
import PakoraTallrik from "../assets/TIKKA ROTI FOOD TRUCK/Pakora Tallrik.jpg";
import SmashBurger from "../assets/TIKKA ROTI FOOD TRUCK/Smash Burger.jpg";
import AmericanBurger from "../assets/TIKKA ROTI FOOD TRUCK/American Burger.jpg";
import MexicanBurger from "../assets/TIKKA ROTI FOOD TRUCK/Mexican Burger.jpg";
import SmokeyBurger from "../assets/TIKKA ROTI FOOD TRUCK/Smokey BBQ Burger.jpg";
import HalloumiBurger from "../assets/TIKKA ROTI FOOD TRUCK/Halloumi Burger.jpg";
import GyrosPita from "../assets/TIKKA ROTI FOOD TRUCK/Gyros i Pitabrod.jpg";
import Souvlaki from "../assets/TIKKA ROTI FOOD TRUCK/Souvlaki.jpg";
import Soutzokakia from "../assets/TIKKA ROTI FOOD TRUCK/Soutzokakia.jpg";
import Frasig from "../assets/TIKKA ROTI FOOD TRUCK/Frasig.jpg";
import GyrosTallrik from "../assets/TIKKA ROTI FOOD TRUCK/GyrosTallrik.jpg";
import TacoBurger from "../assets/TIKKA ROTI FOOD TRUCK/TacoBurger.jpg";
import Enchillada from "../assets/TIKKA ROTI FOOD TRUCK/Enchillada.jpg";
import Quesadillas from "../assets/TIKKA ROTI FOOD TRUCK/Quesadillas.jpg";
import TacosSpecial from "../assets/TIKKA ROTI FOOD TRUCK/TacosSpecial.jpg";
import Fajitas from "../assets/TIKKA ROTI FOOD TRUCK/Fajitas.jpg";
import VeggieTacos from "../assets/TIKKA ROTI FOOD TRUCK/VegieTacos.jpg";
import Yakisoba from "../assets/TIKKA ROTI FOOD TRUCK/Yakisoba.jpg";
import TikkaBaoBun from "../assets/TIKKA ROTI FOOD TRUCK/TikkaBaoBun.jpg";
import GrilloumiBaoBun from "../assets/TIKKA ROTI FOOD TRUCK/GrilloumiBaoBun.jpg";
import ExoticPokeBowl from "../assets/TIKKA ROTI FOOD TRUCK/Exotic.jpg";
import TikkaTallrik from "../assets/TIKKA ROTI FOOD TRUCK/TikkaTallrik.jpg";
import Cevape from "../assets/TIKKA ROTI FOOD TRUCK/Cevape.jpg";
import ChickenBiryani from "../assets/TIKKA ROTI FOOD TRUCK/ChickenBiryani.jpg";
import TikkaMasala from "../assets/TIKKA ROTI FOOD TRUCK/TikkaMasala.jpg";

export default function Menu() {
  
  return (
    <div className="flex flex-col items-center p-6  min-h-screen">
      <h1 className="text-4xl font-bold  mb-8">Vår Meny</h1>

      {/* Burgers Section */}
      <Card className="w-full max-w-6xl mb-6" id="street-burgers">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Street Burgers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Smash Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SmashBurger}
                alt="Smash Burger"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Smash Burger (NEXT LEVEL)</p>
              <p className="text-gray-600">
                Smashed nötfärs (2*100g), cheddarost, grillad jalapeños,
                guacamole, tortillachips, dressing, krispsallad & lätt rostat
                brioche bröd,,serverad med 9mm mcCain pommes frites.
              </p>
            </div>
          </div>

          {/* Smokey Barbeque */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SmokeyBurger}
                alt="Smokey Barbeque Burger"
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
                src={AmericanBurger}
                alt="American Burger"
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
                src={MexicanBurger}
                alt="Mexican Burger"
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
                src={HalloumiBurger}
                alt="Halloumi Burger"
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
      <Card className="w-full max-w-6xl mb-6" id="grekisk-streetfood">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Grekisk Streetfood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Gyros i pitabröd */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={GyrosPita}
                alt="Gyros i pitabröd"
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
                src={Souvlaki}
                alt="Souvlaki Chicken"
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
                src={Soutzokakia}
                alt="Soutzokakia"
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
                src={Frasig}
                alt="Frasig halloumi i pitabröd"
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
                src={GyrosTallrik}
                alt="Gyros Tallrik"
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

      {/* Bosnian Specialty Streetfood Section */}
      <Card className="w-full max-w-6xl mb-6" id="bosnian-specialty">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Bosnian Specialty
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Cevapi */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={Cevape}
                alt="Cevape"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Cevapi</p>
              <p className="text-gray-600">
                Grillad färs (Nöt/kalv/lamm) i form av plattor i lepinja bröd
                serveras med ajvar, kajmak och fin hakade lök.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Mexikansk Streetfood Section */}
      <Card className="w-full max-w-6xl mb-6" id="mexikansk-streetfood">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Mexikansk Streetfood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tacos Burger */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={TacoBurger}
                alt="Tacos Burger"
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
                src={Enchillada}
                alt="Enchilada Pollo"
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
                src={Quesadillas}
                alt="Quesadilla Kyckling"
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
                src={TacosSpecial}
                alt="Tacos special (Nötfärs)"
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
                src={Fajitas}
                alt="Fajitas"
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
                src={VeggieTacos}
                alt="Veggie Tacos"
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
      <Card className="w-full max-w-6xl mb-6" id="asiatisk-streetfood">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Asiatisk Streetfood
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Yakisoba Nudlar */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={Yakisoba}
                alt="Yakisoba Nudlar"
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
                src={TikkaBaoBun}
                alt="Chicken Tikka Bao Buns"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Tikka Bao Buns</p>
              <p className="text-gray-600">
                Grillad kyckling file serveras med picklade rödlök,
                myntayoghurtsås, röstad sesamfrö, rödkål och tomat.
              </p>
            </div>
          </div>

          {/* Grilloumi Bao Buns */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={GrilloumiBaoBun}
                alt="Grilloumi Bao Buns"
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
      <Card className="w-full max-w-6xl mb-6" id="indisk-pakistansk">
        <h2 className="text-2xl font-semibold text-orange-500 border-b-2 pb-2 mb-4">
          Indisk/Pakistansk
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pakora Vegan Rulle */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={ExoticPokeBowl}
                alt="Exotic Poke Bowl"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Exotic Poke Bowl</p>
              <p className="text-gray-600">
                Chicken Tikka(Grillad kyckling), Mango, Feta ost, Färg glada
                grönsaker, färsk mynta, röda kidneybönor.
              </p>
            </div>
          </div>

          {/* Chicken Tikka Tallrik */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={TikkaTallrik}
                alt="Chicken Tikka Tallrik"
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
                src={TikkaTallrik}
                alt="Chicken Tandoori Tallrik"
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
                src={PakoraTallrik}
                alt="Pakora Tallrik"
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

          {/* Samosa Tallrik */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={SamosaTallrik}
                alt="Pakora Tallrik"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Samosa Tallrik </p>
              <p className="text-gray-600">
                Friterade piroger med fyllning av kryddig grönsaks blandning.
                Serveras med tamarindsås och myntayoghurtsås.
              </p>
            </div>
          </div>

          {/* Chicken Biryani  */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={ChickenBiryani}
                alt="Pakora Tallrik"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Chicken Biryani</p>
              <p className="text-gray-600">
                Biryani är en smakbomb! Mör kyckling marinerad i kryddad
                aromatisk yoghurt och serveras med fluffigt ris och
                karamelliserad lök.
              </p>
            </div>
          </div>

          {/* Tikka MAsala  */}
          <div className="flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img
                src={TikkaMasala}
                alt="Pakora Tallrik"
                className="w-60 h-60 object-cover rounded"
              />
            </div>
            <div className="text-center">
              <p className="font-semibold">Tikka Masala</p>
              <p className="text-gray-600">
                Krämig och smakrik kyckling gryta serveras med ris,
                isbergssallad, lök, tomat, myntayoghurtsås och nan bröd.
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
