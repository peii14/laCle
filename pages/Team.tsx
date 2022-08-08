import Hero from "../components/Hero";
import team from "../images/team/team.png";
import Image from "next/image";
import hari from "../images/team/hari.jpg";
import gayuh from "../images/team/gayuh.jpg";
import afif from "../images/team/afif.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGoogle,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
const Team = () => {
  return (
    <div className="layout">
      <div className="h-screen overflow-visible mt-2">
        <Hero content="" title="Team" image={team} />
        <div className="border-x-2 h-1/6 border-forth border-opacity-60 grid md:grid-cols-3 grid-cols-1 md:w-full w-11/12 mx-auto ">
          <div className="md:col-start-2  md:border-x-2 border-forth border-opacity-60 relative ">
            <h1 className="text-4xl text-center font-sec font-thin whitespace-nowrap text-forth z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              Chief Executive Officer
            </h1>
          </div>
        </div>
      </div>
      <div className="text-forth border-x-2 border-t-2 border-forth border-opacity-60  flex flex-col">
        <div className="m-auto z-0 p-10 w-max border-x-2 border-forth border-opacity-60">
          <Image alt={"hari"} src={hari} width={350} height={350} />
        </div>
        <div className="relative ">
          <h3 className="absolute left-1/2 -translate-x-1/2 bottom-0 z-10 ">
            Hari Restu Septi Aji
          </h3>
        </div>
        <div className="flex flex-row justify-center gap-0 border-y-2 border-forth border-opacity-60">
          <div className="flex flex-row ">
            <div className="basis-1/12 m-auto">
              <h3
                className="rotate-180 font-sec font-thin text-center "
                style={{ writingMode: "vertical-rl" }}
              >
                Chief Marketing Officer
              </h3>
            </div>
            <div className="basis-11/12 p-10 w-max border-l-2 border-forth border-opacity-60 relative">
              <div className=" ">
                <Image alt={"afif"} src={afif} width={350} height={350} />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <h3>Afif Bareski</h3>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="basis-11/12 p-10 w-max border-x-2 border-forth border-opacity-60 relative">
              <div className="">
                <Image alt={"gayuh"} src={gayuh} width={350} height={350} />
              </div>
              <h3 className="absolute left-1/2 -translate-x-1/2 bottom-0 w-max">
                Gayuh Kautaman
              </h3>
            </div>
            <div className="basis-1/12 m-auto ">
              <h3
                className="rotate-180 font-thin font-sec"
                style={{ writingMode: "vertical-rl" }}
              >
                Chief Technology Officer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
