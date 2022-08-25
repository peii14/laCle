import Hero from "../components/Hero";
import Image from "next/image";
import dot from "../images/dot.png";
import spring from "../images/spring/spring.png";
import SeasonBody from "../components/SeasonBody";

import paris1 from "../images/spring/paris1.png";
import paris2 from "../images/spring/paris2.jpg";
import stras1 from "../images/spring/stras1.png";
import stras2 from "../images/spring/stras2.png";
import marseille1 from "../images/spring/marseille1.png";
import marseille2 from "../images/spring/marseille2.png";
import giverny1 from "../images/spring/giverny1.png";
import giverny2 from "../images/spring/giverny2.png";

const Spring = () => {
  const contents = [
    {
      id: 1,
      city: "Paris",
      image: paris2,
      image2: paris1,
      content:
        "Paris is a city known for its “city of love” and the famous Eiffel tower monument. This city is also known as the fashion city where this city has quite a lot of shopping centers. Besides that, Paris has many fascinating museums and parks to visit. It is exciting to visit the park to see various kinds of flowers in spring, such as the cherry blossom garden not far from Paris, Jardin Luxembourg, Jardin Tuileries, etc. Moreover, Paris has the most significant museum, namely the Louvre Museum, where we can spend a whole day enjoying the entire contents of this museum. In addition, there are many cute cafes to enjoy in the morning and evening.",
    },
    {
      id: 2,
      city: "Strasbourg",
      image: stras1,
      image2: stras2,
      content:
        "Eastern hemisphere romantic country, France. Everyone can find a city that is renowned for its fabulous wines. As a capital of the Grand Est region, built with ancient architecture that shows its traditional culture, thus, it seems like a german building historically. Strasbourg was influenced, and it sits near the German border. There's a picturesque monument called the Gothic Cathedral Notre-Dame in the heart of the city center. Human beings love to stroll around the Quai Batelier, one of the most famous touristic places there. Turning left, we can see the beautiful river with the juvenile sitting on the river's edge. On the right side, our eyes would enjoy observing the arrangement of the old building with its distinctive style.",
    },
    {
      id: 3,
      city: "Marseille",
      image: marseille1,
      image2: marseille2,
      content:
        "Marseille is the second largest city in France. This city has many beautiful destinations. We can enjoy outdoor dining or boating activities, and usually, in the spring season, there are many festivals ranging from music to global sailing competitions. We can enjoy the beauty of this city by hiking, cycling around the city, boating, and exploring the Calanques national park is a great way to see marseille.",
    },
    {
      id: 4,
      city: "Giverny",
      image: giverny1,
      image2: giverny2,
      content:
        "It is located about 70 km Northwest of Paris. For lovers of plants and painting, a must visit this small town. The city is lovely to walk in a while, enjoying the air surrounded by pretty flowers and country houses. Besides that, we can also visit the artist's meal, Monet, and the Museum of Impressionism.",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen flex-col pt-16 m-auto flex items-center ">
        <Hero
          content="A popular time of the year to visit the French capital, spring in Paris starts out chilly with daily highs of around 54°F (12°C) in March. By May the weather warms up to a very pleasant 68°F (20°C) - perfect for spending the day exploring the city’s beautiful gardens and parks."
          subTitle=""
          title="Spring"
          image={spring}
          cp={2}
          subtitle2="Temperature"
          max="20 C"
          min="12 C"
        />
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
export default Spring;
