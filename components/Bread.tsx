import Image from "next/image";
import dot from "../images/dot.png";

const Bread = (props: any) => {
  return (
    <div className="relative  mx-auto">
      <div className="z-10 absolute w-full">
        <h2 className="font-sec font-thin text-center">{props.package}</h2>
      </div>
      <div className="z-0 mx-auto w-max">
        <Image alt="dot" src={dot} width={110} height={110} />
      </div>
      <div className=" absolute top-10 p-1">
        <Image alt="Bread" src={props.img} />
      </div>
    </div>
  );
};
export default Bread;
