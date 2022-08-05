import AnimateHeight from "react-animate-height";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import g from "../styles/Glassmorphism.module.css";
import Image from "next/image";

const HoteCard = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    if (isOpen) setOpen(false);
    else setOpen(true);
  }
  return (
    <div className=" group cursor-pointer" onClick={handleClick}>
      <div
        className={`${g.Glass} group-hover:-translate-y-10 duration-500 -bottom-11 z-10 absolute w-full`}
      >
        <h3 className="font-sec text-forth py-1">{props.city}</h3>
        <div className="z-10 ">
          <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
            <p className=" pb-10 pt-5 text-center">{props.content}</p>
          </AnimateHeight>
        </div>
        <div className="relative h-9 ">
          <FontAwesomeIcon
            className={`transform absolute left-1/2 -translate-x-1/2 text-3xl w-max mx-auto text-secondary duration-500 
                      ${isOpen ? "-translate-y-7 rotate-0" : " rotate-180 "} `}
            icon={faChevronDown}
          />
        </div>
      </div>

      <div className=" z-0">
        <Image alt="Img" src={props.img} height={1500} />
      </div>
    </div>
  );
};
export default HoteCard;
