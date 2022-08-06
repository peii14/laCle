import Hero from "../components/Hero";
import Image from "next/image";
import dot from "../images/dot.png";
import spring from "../images/spring/spring.png";
import SeasonBody from "../components/SeasonBody";

import paris1 from "../images/spring/paris1.png";
import paris2 from "../images/spring/paris2.png";
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      city: "Strasbourg",
      image: stras1,
      image2: stras2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      city: "Marseille",
      image: marseille1,
      image2: marseille2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      city: "Giverny",
      image: giverny1,
      image2: giverny2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" subTitle="" title="Spring" image={spring} />
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
export default Spring;
