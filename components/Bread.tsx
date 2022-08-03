import Image from "next/image";
import dot from "../images/dot.png";
import cr from "../images/package/croissant.png";

const Bread = (props: any) => {
  return (
    <div className="relative w-32">
      <div className="z-10 absolute">
        <h2 className="font-sec font-thin">Croissant</h2>
      </div>
      <div className="z-0 mx-auto w-max">
        <Image alt="dot" src={dot} width={100} height={100} />
      </div>
      <div className=" absolute top-10">
        <Image alt="Bread" src={cr} />
      </div>
    </div>
  );
};
export default Bread;
