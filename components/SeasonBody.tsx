import Image from "next/image";
import dot from "../images/dot.png";

const SeasonBody = (props: any) => {
  return (
    <div className=" md:w-full w-11/12 mx-auto border-forth border-x-2 md:border-b-2 border-opacity-60">
      {props.content.map((index: any) => {
        return (
          <div key={index.id} className="grid md:grid-cols-3 grid-cols-1">
            <div
              className={`p-5 min-h-max relative border-forth border-opacity-60 md:border-b-2
               -mt-20 h-full`}
            >
              <div className="w-10/12 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:block hidden  ">
                <Image alt="mar" src={index.image} />
              </div>
            </div>
            <div className="md:border-x-2 border-b-2 h-full relative border-forth text-forth  border-opacity-60">
              <h2 className="mt-5 font-sec text-center font-thin">
                {index.city}
              </h2>
              <div className="absolute -top-5 md:-left-5 -left-3  ">
                <Image alt="number" src={dot} height={50} width={50} />
                <h1 className="absolute text-5xl -bottom-1 left-1/2 -translate-x-1/2 text-numerical">
                  {index.id}
                </h1>
              </div>
              <div className="md:h-bdy h-max">
                <p className="px-5 pt-2 pb-5 ">{index.content}</p>
              </div>
            </div>
            <div
              className={`p-5 border-forth relative border-opacity-60 min-h-max border-b-2 
                md:-mt-20 mt-0
                h-full`}
            >
              <div className=" w-10/12 md:absolute left-1/2 md:-translate-x-1/2 top-1/2 mx-auto md:-translate-y-1/2   ">
                <Image alt="mar" src={index.image2} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SeasonBody;
