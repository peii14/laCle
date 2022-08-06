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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      city: "Chamonix",
      image: chamonix1,
      image2: chamonix2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      city: "Auvergne",
      image: auvergne1,
      image2: auvergne2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      city: "Lile",
      image: lile1,
      image2: lile2,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
