import Hero from "../components/Hero";
import Image from "next/image";
import dot from "../images/dot.png";
import autumn from "../images/autumn/autumn.png";
import SeasonBody from "../components/SeasonBody";

import mtMch1 from "../images/autumn/stMch1.png";
import mtMch2 from "../images/autumn/stMch2.png";
import lyon1 from "../images/autumn/lyon1.png";
import lyon2 from "../images/autumn/lyon2.png";
import bordeaux1 from "../images/autumn/bordeaux1.png";
import bordeaux2 from "../images/autumn/bordeaux2.png";
import tours1 from "../images/autumn/tours1.png";
import tours2 from "../images/autumn/tours2.png";
const Autumn = () => {
  const contents = [
    {
      id: 1,
      city: "Mont Saint-Michel",
      image: mtMch2,
      image2: mtMch1,
      content:
        "Mont Saint-Michel is a tidal island in Normandy close to the northern coast of France. Mont Saint-Michael is one of the most interesting heritages in Europe, rich in history and wonders. Architectural forms look the same as the middle ages and have beautiful coastlines. Spending time in Mont Saint-Michael recommended at least 4 hours to visit this rocky tidal island. here are interesting places to visit: Abbaye du Mont Saint-Michel, Ramparts, Grand Rue, La Mère Poulard: The Restaurant La Mère Poulard serves Mom Poulard's culinary specialty, such as the omelet, which made following a kept recipe secret to this day.",
    },
    {
      id: 2,
      city: "Lyon",
      image: lyon1,
      image2: lyon2,
      content:
        "Lyon is one large world heritage site, with a significant renaissance old town and historic industrial area. Beautiful renaissance architecture in Vieux Lyon has semi-hidden passages called traboules connecting the courtyard with the saone. The city is arguably the culinary city in the world, the city of chef Paul Bocuse who is revered as the god of French cuisine. In addition, Lyon has a beautiful botanical garden, Ancient Theater of Fourvière, Musée des Beaux-Arts de Lyon, and restaurant Lyonnaise Cuisine.",
    },
    {
      id: 3,
      city: "Bordeaux",
      image: bordeaux1,
      image2: bordeaux2,
      content:
        "Bordeaux is classified as a city of art and history. Bordeaux is the most famous wine region in the world. Part of the land in the city is used to produce wine. Besides that this city has beautiful spots for taking pictures, tasting the typical cuisine here and we can visit the wine garden to do the wine tasting",
    },
    {
      id: 4,
      city: "Tours",
      image: tours1,
      image2: tours2,
      content:
        "Tours are the great capital of the Loire Valley. This city has old architecture like the city of Strasbourg. The city has beautiful places to visit while enjoying old buildings such as The Architecture of Fine Arts Museum, Hotel Gouïn, Tours castle, 'la Psalette' cloister, and Saint Martin Basilica. We can also rent a bicycle to walk around to visit several places on tour or, if far away, can use public transportation to St Cosme monastery, Montbazon fort, Vouvray winery, Villandry park, and Valmer park.",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" subTitle="" title="Autumn" image={autumn} />
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
export default Autumn;
