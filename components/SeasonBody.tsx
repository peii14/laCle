import Image from "next/image";
import React, { useState, useEffect } from "react";

import dot from "../images/dot.png";

const SeasonBody = (props: any) => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }
    window.addEventListener("scroll", handleScroll);

    if (offset < 20) {
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      return;
    }
  }, [offset]);
  return (
    <div className=" md:w-full w-11/12 mx-auto border-forth border-x-2 border-opacity-60">
      {props.content.map((index: any) => {
        return (
          <div key={index.id} className="grid md:grid-cols-3 grid-cols-1">
            <div
              className={`p-5 border-forth border-opacity-60 border-b-2 ${
                index.id > 1 ? "mt-0" : "-mt-20"
              }  h-full`}
            >
              <div className="w-10/12 mx-auto md:block hidden  ">
                <Image alt="mar" src={index.image} />
              </div>
            </div>
            <div className="md:border-x-2 border-b-2 h-full relative border-forth text-forth  border-opacity-60">
              <h2 className="mt-5 font-sec text-center font-thin">
                {index.city}
              </h2>
              <div className="absolute -top-5 -left-5  ">
                <Image alt="number" src={dot} height={50} width={50} />
                <h1 className="absolute text-5xl -bottom-1 left-1/2 -translate-x-1/2 text-numerical">
                  {index.id}
                </h1>
              </div>

              <div className="min-h-full">
                <p className="px-5 pt-2 pb-5 min-h-max ">{index.content}</p>
              </div>
            </div>

            <div
              className={`p-5 border-forth border-opacity-60 md:border-b-2 ${
                index.id > 1 ? "mt-0" : "md:-mt-20 mt-0"
              }  h-full`}
            >
              <div className="w-10/12 mx-auto  ">
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
