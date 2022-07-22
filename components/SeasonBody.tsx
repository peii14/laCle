import Image from "next/image";
import marsille1 from "../images/summer/marsille1.png";
import marsille2 from "../images/summer/marsille2.png";
import dot from "../images/dot.png";

const SeasonBody = (props: any) => {
  return (
    <div className=" border-forth border-x-2 border-opacity-60 h-screen grid grid-cols-3 ">
      <div className=" border-forth border-opacity-60 border-b-2 -mt-10">
        <div className="w-10/12 mx-auto ">
          <Image alt="mar" src={marsille1} />
        </div>
      </div>
      <div className="border-x-2 relative border-forth text-forth p-5 border-opacity-60">
        <h2 className="font-sec text-center font-thin">Marseille</h2>
        <div className="absolute -top-5 -left-5">
          <Image alt="number" src={dot} height={50} width={50} />
          <h1 className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-numerical">
            1
          </h1>
        </div>
      </div>
      <div className=" border-opacity-60 -mt-10 border-b-2 border-forth">
        <div className="w-10/12 mx-auto ">
          <Image alt="mar" src={marsille2} />
        </div>
      </div>
    </div>
  );
};
export default SeasonBody;
