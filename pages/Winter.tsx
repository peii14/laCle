import Hero from "../components/Hero";
import winter from "../images/winter/winter.png";
import Image from "next/image";
import dot from "../images/dot.png";
import SeasonBody from "../components/SeasonBody";

import cham1 from "../images/winter/chamrousse1.png";
import cham2 from "../images/winter/chamrousse2.png";
import chamonix1 from "../images/winter/chamonix1.png";
import chamonix2 from "../images/winter/chamonix2.png";
import auvergne1 from "../images/winter/auvergne1.png";
import auvergne2 from "../images/winter/auvergne2.png";
import lile1 from "../images/winter/lile1.png";
import lile2 from "../images/winter/lile2.png";

const Winter = () => {
  const contents = [
    {
      id: 1,
      city: "Chamrousse",
      image: cham1,
      image2: cham2,
      content:
        "Chamrousse is nestled in the mountains above Gerboble at Belledonne Peak. Chamrousse has a popular ski resort in France. this place is fascinating to visit because we can play in the snow and down the hill using skis along 40km-90km. Besides that, we can also climb mountains, fishing, and paragliding.",
    },
    {
      id: 2,
      city: "Chamonix",
      image: chamonix1,
      image2: chamonix2,
      content:
        "The city of Chamonix is located on the French border between Switzerland and Italy. The town is famous for skiing, paragliding, and peak mont blanc. Besides skiing, paragliding, and hiking, we can go around this city because there are many exciting places. Such as the village of Chamonix-mont-blanc, which has beautiful views by cable car, and Téléphérique de l'Aiguille du Midi, which is famous for its height and slope. Other than that, we can enjoy culinary delights in this city, such as LE MONCHU RESTAURANT, renowned for its traditional dishes, and an old restaurant of more than 50 years, OMELETTERIE LA POELE RESTAURANT.",
    },
    {
      id: 3,
      city: "Auvergne",
      image: auvergne1,
      image2: auvergne2,
      content:
        "Auvergne's capital city, Clermont Ferrand, lying at the foot of an ancient volcano. This city has a calm environment and is rich in the beauty of its natural scenery. The area has ancient castles, churches, and nice villages. There are many places for us to enjoy the natural beauty while doing hiking and cycling activities around the city. several places such as, Parc Naturel Régional des Volcans d'Auvergne, Le Puy-en-Velay with its beautiful church, and many others. We can also enjoy the very famous spa, Vichy.",
    },
    {
      id: 4,
      city: "Lile",
      image: lile1,
      image2: lile2,
      content:
        "The city is located in the Nord pas de Calais region and close to the Belgian border. Lille is the fourth largest metropolitan area in France. Many places worth visiting here, walking around the city of Lille, enjoying the beauty of ancient buildings by enjoying a local beer or typical snacks here, visiting the market, Place de Charles de Gaulle, Notre Dame de la Treille, and Palais des Beaux-Arts.",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" subTitle="" title="Winter" image={winter} />
        <div className="border-x-2 h-1/6 border-forth border-opacity-60 grid md:grid-cols-3 grid-cols-1 md:w-full w-11/12 mx-auto ">
          <div className="md:col-start-2 md:border-b-2 md:border-x-2 border-forth border-opacity-60 relative ">
            <div className="absolute top-1/3 -translate-y-1/2 md:left-5 left-16 ">
              <Image alt="dot" src={dot} height={50} width={50} />
            </div>
            <h1 className="text-4xl text-center font-sec font-thin whitespace-nowrap text-forth z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              Top Activities
            </h1>
          </div>
        </div>
      </div>
      <SeasonBody content={contents} />
    </div>
  );
};
export default Winter;
