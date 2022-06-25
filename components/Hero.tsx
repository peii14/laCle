const Hero = () => {
  return (
    <div className="h-5/6 border-2 border-forth border-opacity-60">
      <div className="grid grid-cols-3 grid-rows-3  h-full ">
        <div className="border-y-2  border-opacity-60 border-forth col-start-1 row-start-2 py-2 text-forth">
          <h3 className="text-center font-sec font-thin">About Us</h3>
        </div>
        <div className="border-x-2 row-span-3 border-opacity-60 border-forth col-start-2">
          <h1 className="font-sec text-center font-thin text-secondary">
            La Cle
          </h1>
        </div>
        <div className="border-y-2 border-opacity-60 col-start-3 border-forth row-start-2">
          <h1>duar3</h1>
        </div>
      </div>
    </div>
  );
};
export default Hero;
