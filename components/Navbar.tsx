import Link from "next/link";
import AnimateHeight from "react-animate-height";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import g from "../styles/Glassmorphism.module.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  function handleClick() {
    if (isOpen) setOpen(false);
    else setOpen(true);
  }
  return (
    <nav
      className={`text-center  fixed w-screen z-50 flex flex-row gap-5 justify-center py-5 text-forth ${g.navbar} `}
    >
      <Link href="/">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Home</p>
        </a>
      </Link>
      <Link href="/Package">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Package</p>
        </a>
      </Link>
      <div onClick={handleClick} className="cursor-pointer relative ">
        <div className="h-max group hover:scale-125 duration-500 hover:bg-sec rounded-md hover:px-5 hover:text-primary flex flex-row gap-2">
          <p>Season</p>
          <FontAwesomeIcon
            className={`transform text-sm  m-auto text-forth group-hover:text-primary duration-500 
          ${isOpen ? " rotate-180" : " rotate-0 "} `}
            icon={faChevronDown}
          />
        </div>
        <div className="z-50 bg-forth top-full translate-y-1 left-1/2 -translate-x-1/2 absolute rounded-md text-primary">
          <AnimateHeight duration={500} height={isOpen ? "auto" : 0}>
            <Link href="/Autumn">
              <a className="">
                <p className="hover:bg-sec transform-gpu hover:scale-110 duration-300 rounded-t-md border-b-2 border-third px-3 py-2">
                  Autumn
                </p>
              </a>
            </Link>
            <Link href="/Summer">
              <a className="border-y-2 border-third">
                <p className="border-b-2 border-third px-3 hover:bg-sec transform-gpu hover:scale-110 duration-300 py-2">
                  Summer
                </p>
              </a>
            </Link>
            <Link href="/Spring">
              <a className="border-y-2 border-third">
                <p className="hover:bg-sec transform-gpu hover:scale-110 duration-300 border-b-2 border-third px-3 py-2">
                  Spring
                </p>
              </a>
            </Link>
            <Link href="/Winter">
              <a className="border-y-2 border-third">
                <p className="px-3 py-2 hover:bg-sec transform-gpu hover:scale-110 duration-300 rounded-b-md">
                  Winter
                </p>
              </a>
            </Link>
          </AnimateHeight>
        </div>
      </div>
      {/* <Link href="/Booking">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Book Your Plan</p>
        </a>
      </Link> */}
      <Link href="/Team">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Team</p>
        </a>
      </Link>
    </nav>
  );
};
export default Navbar;
