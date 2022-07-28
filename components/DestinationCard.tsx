import Image from "next/image";

const DestinationCard = (props: any) => {
  return (
    <div className=" mx-auto relative  ">
      <div className="border-2 rounded-t-full w-full -left-10 h-full absolute p-0 border-forth"></div>
      <div className="absolute z-20 text-forth -left-10 ">
        <h1 className="font-sec font-thin ">{props.header1}</h1>
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
          <h1 className="font-sec font-thin ">{props.header2}</h1>
        </div>
      </div>
      <Image src={props.image} alt="lyon" />
    </div>
  );
};
export default DestinationCard;
