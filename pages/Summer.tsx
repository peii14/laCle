import Hero from "../components/Hero";
import SeasonBody from "../components/SeasonBody";
import summer from "../images/summer/summer.png";
import dot from "../images/dot.png";
import Image from "next/image";

const Summer = () => {
  return (
    <div className="layout">
      <div className="h-screen overflow-hidden mt-2">
        <Hero content="" subTitle="" title="Summer" image={summer} />
        <div className="border-x-2 h-full z-0 border-forth border-opacity-60 grid grid-cols-3  ">
          <div className="col-start-2 border-x-2 border-forth border-opacity-60 relative ">
            <div className="absolute z-0">
              <Image alt="dot" src={dot} height={50} width={50} />
            </div>
            <h1 className="text-center text-forth z-10">Top Activities</h1>
          </div>
        </div>
      </div>
      <SeasonBody />
    </div>
  );
};
export default Summer;
