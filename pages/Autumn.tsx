import Hero from "../components/Hero";
import Image from "next/image";
import dot from "../images/dot.png";
import autumn from "../images/autumn/autumn.png";
const Autumn = () => {
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
      {/* <SeasonBody content={contents} /> */}
    </div>
  );
};
export default Autumn;
