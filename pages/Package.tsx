import Hero from "../components/Hero";
import paris from "../images/package/paris.png";
import cr from "../images/package/croissant.png";
import pain from "../images/package/painchoco.png";
import gr from "../images/package/group.png";
import croffle from "../images/package/croffle.png";

import GuidePackage from "../components/GuidePackage";
const Package = () => {
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" title="Packages" image={paris} />
      </div>
      <section>
        <h1 className="font-sec text-forth text-center font-thin">
          Guide Package
        </h1>
        <div className="flex md:flex-row flex-col md:w-full w-2/3 gap-10  mx-auto mt-10">
          <div className="basis-1/4">
            <GuidePackage
              img={cr}
              package={"Croissant"}
              content={" max 6 : Tour guide, Photographer and Uber"}
            />
          </div>
          <div className="basis-1/4">
            <GuidePackage
              img={croffle}
              package={"Croffle"}
              content={" max 6 : Tour guide, Photographer and Uber"}
            />
          </div>
          <div className="basis-1/4">
            <GuidePackage
              img={pain}
              package={"Pain au chocolat"}
              content={" max 6 : Tour guide, Photographer and Uber"}
            />
          </div>
          <div className="basis-1/4">
            <GuidePackage
              img={gr}
              package={"Baguette"}
              content={" max 6 : Tour guide, Photographer and Uber"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Package;
