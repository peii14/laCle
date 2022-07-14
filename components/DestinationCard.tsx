import Image from "next/image";
import lyon from "../images/home/lyon.png";
const DestinationCard = () => {
  return (
    <div className="w-1/2 mx-auto relative  ">
      <div className="border-2 rounded-t-full w-full -left-10 h-full absolute p-0 border-forth"></div>
      <div className="absolute z-20 text-forth -left-10 ">
        <h1 className="font-sec font-thin ">Lyon Old</h1>
        <div className="flex flex-row gap-2">
          <div className="w-11/12 m-auto">
            <hr
              style={{
                color: "#f0f0f0",
                backgroundColor: "#f0f0f0",
                height: 4,
              }}
            />
          </div>
          <h1 className="font-sec font-thin ">Town</h1>
        </div>
      </div>
      <Image src={lyon} alt="lyon" />
    </div>
  );
};
export default DestinationCard;
