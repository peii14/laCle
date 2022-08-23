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
import dot from "../images/dot.png";

const Team = () => {
  return (
    <div className="layout">
      <div className="h-screen pt-16 overflow-visible m-auto flex flex-col items-center ">
        <Hero content="" title="Team" image={team} />
        <div className="border-x-2 h-1/6 border-forth border-opacity-60 grid md:grid-cols-3 grid-cols-1 md:w-full w-11/12 mx-auto ">
          <div className="md:col-start-2  md:border-x-2 border-forth border-opacity-60 relative ">
            <h1 className="text-4xl text-center font-sec font-thin whitespace-nowrap text-forth z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              Chief Executive Officer
            </h1>
          </div>
        </div>
      </div>
      <div className="text-forth md:border-x-2 border-t-2 relative border-forth border-opacity-60  flex flex-col">
        <div className="flex flex-col">
          <div className="absolute md:block hidden ">
            <Image alt="dot" src={dot} width={100} height={100} />
          </div>
          <div>
            <h3 className="absolute text-sec font-thin font-sec left-1/2 -translate-x-1/2 top-0 z-10 w-max ">
              Hari Restu Septi Aji
            </h3>
            <div className="m-auto z-0 p-10 md:w-max w-11/12 md:border-b-0 border-b-2 border-x-2 border-forth border-opacity-60">
              <Image alt={"hari"} src={hari} width={350} height={350} />
            </div>
            <div className="relative w-1/3 mx-auto">
              <div className="absolute right-0 bottom-2 flex flex-row gap-5">
                <a
                  href="https://www.instagram.com/harirestu_/?hl=fr"
                  target={"_blank"}
                  rel="noreferrer"
                  className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                >
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                  <p className="m-auto group-hover:w-20 w-0 duration-500  ">
                    harirestu_
                  </p>
                </a>
                <a
                  href="mailto:hariaji.rs@gmail.com"
                  target={"_blank"}
                  rel="noreferrer"
                  className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                >
                  <FontAwesomeIcon icon={faGoogle} size="2x" />
                  <p className="m-auto group-hover:w-40 w-0 duration-500  ">
                    hariaji.rs@gmail.com
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute right-0 md:block hidden">
            <Image alt="dot" src={dot} width={100} height={100} />
          </div>
        </div>
        <div className="flex md:flex-row md:gap-0 flex-col justify-center gap-16 md:border-y-2 md:py-0 py-16 border-b-2 md:border-x-0 md:w-full w-11/12 mx-auto border-x-2 border-forth border-opacity-60">
          <div className="flex md:flex-row flex-row-reverse mt-0 md:w-max md:mx-0 mx-auto w-11/12 ">
            <div className="basis-1/12 m-auto">
              <h3
                className="rotate-180 font-sec font-thin text-center "
                style={{ writingMode: "vertical-rl" }}
              >
                Chief Marketing Officer
              </h3>
            </div>
            <div className="basis-11/12 md:p-10 w-max md:border-l-2 border-forth border-opacity-60 relative">
              <div className="relative ">
                <h3 className="absolute text-sec font-thin font-sec left-1/2 -translate-x-1/2 bottom-0 z-10 w-max">
                  Afif Bareski
                </h3>
              </div>
              <div className=" ">
                <Image alt={"afif"} src={afif} width={350} height={350} />
              </div>
              <div className="relative ">
                <div className="absolute right-0 top-0 flex flex-row gap-5">
                  <a
                    href="https://www.instagram.com/bareski_/?hl=fr"
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <p className="m-auto group-hover:w-14 w-0 duration-500  ">
                      bareski
                    </p>
                  </a>
                  <a
                    href="mailto:Afif.bareski@gmail.com"
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                  >
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                    <p className="m-auto group-hover:w-44 w-0 duration-500  ">
                      Afif.bareski@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:w-max w-11/12 md:mx-0 mx-auto">
            <div className="basis-11/12 md:p-10 w-max md:border-x-2 border-forth border-opacity-60 relative">
              <div className="relative ">
                <h3 className="absolute text-sec font-thin font-sec left-1/2 -translate-x-1/2 bottom-0 z-10 w-max">
                  Gayuh Kautaman
                </h3>
              </div>
              <div className="">
                <Image alt={"gayuh"} src={gayuh} width={350} height={350} />
              </div>
              <div className="relative ">
                <div className="absolute right-0 top-0 flex flex-row gap-2">
                  <a
                    href="https://www.instagram.com/peii.iii/?hl=fr"
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    <p className="m-auto group-hover:w-10 w-0 duration-500  ">
                      peii.iii
                    </p>
                  </a>
                  <a
                    href="mailto:gayuh14@yahoo.com"
                    target={"_blank"}
                    rel="noreferrer"
                    className="flex flex-row gap-2 group hover:text-sec duration-500 overflow-hidden "
                  >
                    <FontAwesomeIcon icon={faYahoo} size="2x" />
                    <p className="m-auto group-hover:w-40 w-0 duration-500  ">
                      gayuh14@yahoo.com
                    </p>
                  </a>
                </div>
              </div>
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
