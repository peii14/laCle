import AnimateHeight from "react-animate-height";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Bread from "../components/Bread";
import Card from "../components/Card";

const GuidePackage = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    if (isOpen) setOpen(false);
    else setOpen(true);
  }
  return (
    <div
      onClick={handleClick}
      className="group duration-500 max-h-fit cursor-pointer"
    >
      <Card>
        <div className="relative flex flex-col items-center">
          <div className="z-10 h-36 w-full duration-500 group-hover:-translate-y-5">
            <Bread img={props.img} package={props.package} />
          </div>
          <div className="z-0 ">
            <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
              <p className={`text-center pb-10 pt-2`}>{props.content}</p>
            </AnimateHeight>
          </div>
          <FontAwesomeIcon
            className={`absolute bottom-0 left-1/2 z-0 -translate-y-32 -translate-x-1/2 transform text-3xl text-secondary duration-500 group-hover:translate-y-0 group-hover:text-gray-600
          ${isOpen ? " translate-y-0 rotate-180" : " rotate-0 "} `}
            icon={faChevronDown}
          />
        </div>
      </Card>
    </div>
  );
};
export default GuidePackage;
