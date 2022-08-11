import Hero from "../components/Hero";
import SeasonBody from "../components/SeasonBody";
import summer from "../images/summer/summer.png";
import dot from "../images/dot.png";
import Image from "next/image";
import marsille1 from "../images/summer/marsille1.png";
import marsille2 from "../images/summer/marsille2.png";
import versaillers1 from "../images/summer/versaillers1.png";
import versaillers2 from "../images/summer/versaillers2.png";
import etretat1 from "../images/summer/etretat1.png";
import etretat2 from "../images/summer/etretat2.png";
import nice1 from "../images/summer/nice1.png";
import nice2 from "../images/summer/nice2.png";

const Summer = () => {
  const contents = [
    {
      id: 1,
      city: "Marseille",
      image: marsille1,
      image2: marsille2,
      content:
        "Marseille is the second largest city in France. As one of the largest ports in the Mediterranean, it makes marseille the meeting point of various nationalities. Therefore the culinary choices presented in this city are very many. Such as leblebi, tajine, and falafel. the most famous are none other than bouillabaisse, a seafood soup imported from the Mediterranean Sea with spices from various parts of the world.Marseille has a variety of exciting places to visit, namely: Basilique Notre-Dame de la Garde, Massif des Calanques, The Vieux port (old harbor), the Colorful Streets of Le Panier (Old Town), Museum of Civilizations of Europe and the Mediterranean",
    },
    {
      id: 2,
      city: "Versailles",
      image: versaillers1,
      image2: versaillers2,
      content:
        "The place of Versailles or also known as the chateau de Versailles, is a former royal residence located in Versailles west of Paris. This place has various museums such as the palace contents of the French royal family and its palace surroundings such as gardens, the queen's family house, and a large lake. This place is fascinating to visit during the day. We can ride a rowing boat on a beautiful lake, take a mini train, bicycle, or buggy car to go around the Versailles environment, and watch dancing fountain shows and equestrian shows.",
    },
    {
      id: 3,
      city: "Étretat",
      image: etretat1,
      image2: etretat2,
      content:
        "Etretat is located in northwestern France. the city has a rich landscape of cliff views, including three natural arches and a pointed formation called L'Aiguille or the Needle, which soars 70 meters above the sea. it attracts artists such as Eugène Boudin, Gustave Courbet and Claude Monet. Besides that, Etretat has a garden related to art",
    },
    {
      id: 4,
      city: "Nice",
      image: nice1,
      image2: nice2,
      content:
        "French nice located on the french riviera, the southern coast of France. Nice is about 13 kilometers from the principality of Monaco and 30 kilometers from the Franco-Italian border. This place has a rich view of the sea, which is very clean and has exciting buildings. This city has the best photo spots, such as Parc de la Colline du Château, Vieille Ville, Musée Masséna, nice beaches, and a flea market that sells various kinds of antiques, paintings to food. The town is also close to Monte-Carlo, just a few minutes to get there. Usually, people, besides spending time in Nice, visit the area around Nice and Monte-Carlo",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen flex-col pt-16 m-auto flex items-center ">
        <Hero content="" subTitle="" title="Summer" image={summer} />
        <div className="border-x-2 h-1/6 border-forth border-opacity-60 grid md:grid-cols-3 grid-cols-1 md:w-full w-11/12 mx-auto ">
          <div className="md:col-start-2 border-b-2 md:border-x-2 border-forth border-opacity-60 relative ">
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
export default Summer;
