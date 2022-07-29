import Hero from "../components/Hero";
import winter from "../images/winter/winter.png";
import Image from "next/image";
import dot from "../images/dot.png";

const Winter = () => {
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" subTitle="" title="Summer" image={winter} />
        <div className="border-x-2  h-1/6 border-forth border-opacity-60 grid grid-cols-3  ">
          <div className="col-start-2 border-b-2 border-x-2 border-forth border-opacity-60 relative ">
            <div className="absolute top-1/3 -translate-y-1/2 left-5 ">
              <Image alt="dot" src={dot} height={50} width={50} />
            </div>
            <h1 className="text-center font-sec font-thin whitespace-nowrap text-forth z-10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
              Top Activities
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Winter;