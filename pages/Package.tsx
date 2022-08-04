import Hero from "../components/Hero";
import paris from "../images/package/paris.png";
import cr from "../images/package/croissant.png";
import pain from "../images/package/painchoco.png";
import gr from "../images/package/group.png";
import croffle from "../images/package/croffle.png";
import Image from "next/image";
import line from "../images/line.png";
import GuidePackage from "../components/GuidePackage";
import Modal from "../components/Modal";
import Neuromorphism from "../components/Neuromorphism";
import Frame from "../components/Frame";
import gle from "../images/package/gle.png";
import vclass from "../images/package/vclass.png";
const Package = () => {
  const list = [
    {
      id: 1,
      list: "Maximal duration for this journey is 8 hours a day",
    },
    {
      id: 2,
      list: "You are able to propose your own itenerary to our guide.",
    },
    {
      id: 3,
      list: "We are able to pick you upon your arrival",
    },
    {
      id: 4,
      list: "Guide’s meal are under customer’s responsibility",
    },
    {
      id: 5,
      list: "We do not have any offer on accomodation, if needed we do have some recomendation.",
    },
    {
      id: 6,
      list: "Guides operational cost are NOT customer’s responsibility. (Transportation, enterance fee,  Versailles etc)",
    },
  ];
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" title="Packages" image={paris} />
      </div>
      <section>
        <h1 className="font-sec text-forth text-center font-thin">
          Guide Package
        </h1>
        <div className="flex md:flex-row flex-col md:w-full w-2/3 gap-10  mx-auto mt-10 z-10">
          <div className="basis-1/4">
            <GuidePackage
              img={cr}
              package={"Croissant"}
              content={"max 6 : Tour guide, Photographer and Van or monospace"}
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
              content={"Tour guide, Photographer, Uber "}
            />
          </div>
          <div className="basis-1/4">
            <GuidePackage
              img={gr}
              package={"Baguette"}
              content={"Tour guide, Photogrqpher and Public transport"}
            />
          </div>
        </div>
        <div className="my-20 z-40">
          <Modal
            btn={"More Information"}
            title={"Additional Information"}
            content={list}
          />
        </div>
      </section>
      <section>
        <h1 className="font-sec text-forth text-center font-thin">
          Transport Option
        </h1>
        <div className="flex md:flex-row flex-col gap-20 p-10 text-forth justify-center">
          <div className="basis-1/2">
            <Frame>
              <h2 className="font-sec text-center ">Mercedes V Class</h2>
              <div className="w-1/2 mx-auto py-5">
                <Image alt="Vclass" src={vclass} />
              </div>
              <p className="p-5">
                With the Mercedes-Benz V-Class, families travel in an even more
                relaxed manner, leisure-time adventurers experience every moment
                even more intensely and shuttle passengers reach their
                destination as comfortably and stylishly as never before.
              </p>
            </Frame>
          </div>
          <div className="basis-1/2">
            <Frame>
              <h2 className="font-sec text-center ">Mercedes GLE</h2>
              <div className="w-1/2 mx-auto py-5">
                <Image alt="Vclass" src={gle} />
              </div>
              <p className="p-5">
                Inside, the dynamic off-roader is designed for your comfort,
                making long distances a breeze. Take a look at an interior that
                makes every journey one to savour.
              </p>
            </Frame>
          </div>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="font-sec text-forth text-center font-thin">
          Destination Package
        </h1>
        <div className="flex flex-col md:flex-row mt-10 text-forth">
          <div className="basis-1/2">
            <h2 className="font-sec text-forth text-center font-thin">
              Table d’hôte
            </h2>
            <div className="p-5">
              <p className="max-w-sm mx-auto">
                Sit back and relax our guide has plans for you.
                <br />
                Expect the unexpected.
              </p>
              <div></div>
            </div>
          </div>
          <div className="mx-auto md:block hidden ">
            <Image src={line} alt="line" height={500} width={25} />
          </div>
          <div className="basis-1/2">
            <h2 className="font-sec text-forth text-center font-thin">
              à la cartes
            </h2>
            <div className="p-10">
              <p className="max-w-sm mx-auto">
                Feel free to create your own itinerary!!
                <br />
                <br />
                You can contact with us by choosing one of the options below.
              </p>
              <div className="flex flex-row justify-center gap-10 mt-10">
                <Neuromorphism></Neuromorphism>
                <Neuromorphism></Neuromorphism>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Modal btn={"Booking"} />
        </div>
      </section>
    </div>
  );
};
export default Package;
