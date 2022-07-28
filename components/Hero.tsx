import Image from "next/image";
import React, { useState, useEffect } from "react";
import Line from "./Line";

const Hero = (props: any) => {
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
    <div className="h-5/6 border-2 border-forth border-opacity-60 ">
      <div className="grid grid-cols-3 grid-rows-3  h-full ">
        <div className="border-y-2   border-opacity-60 border-forth col-start-1 row-start-2 py-2 text-forth">
          <h3 className="text-center font-sec font-extralight  ">
            {props.subTitle}
          </h3>
          <p className="text-justify">{props.content}</p>
        </div>
        <div className="border-x-2 relative h-full row-span-3 border-opacity-60 border-forth col-start-2">
          <div className="absolute top-1/2 -translate-y-1/2  ">
            <h1 className=" w-full font-sec absolute z-10 -translate-y-1/2 text-7xl left-1/2 -translate-x-1/2 text-center font-thin text-secondary">
              {props.title}
            </h1>
            <div className="w-8/12 absolute z-20 top-10 left-1/2">
              <Line />
            </div>
            <div className="overflow-hidden">
              <div
                className="px-1"
                style={{
                  transform: `translateY(${offset * 0.2}px)`,
                }}
              >
                <Image src={props.image} alt="hero" />
              </div>
            </div>
            <div className="w-8/12 absolute z-20 bottom-10 -left-1/3">
              <Line />
            </div>
          </div>
        </div>
        <div className="border-y-2 border-opacity-60 col-start-3 border-forth row-start-2">
          {/* <h1>duar3</h1> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
