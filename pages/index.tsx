/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import her from "../images/home/hero1.png";
import line from "../images/line.png";
import Destination from "../components/Destination";

const Home: NextPage = () => {
  return (
    <div className="layout">
      <div className="h-screen mt-2">
        <Hero content="" subTitle="About Us" title="la Clé" image={her} />
      </div>
      <section>
        <h1 className="font-sec text-center text-forth font-thin">About Us</h1>
        <div className="flex flex-row gap-5 max-w-4xl mx-auto text-forth py-10 h-max">
          <div className="basis-2/3 ">
            <p className="w-11/12">
              Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer une mise
              en page, le texte définitif venant remplacer le faux-texte dès
              qu'il est prêt ou que la mise en page est achevée. Généralement,
              on utilise un texte en faux latin, le Lorem ipsum ou Lipsum. une
              mise en page, le texte définitif venant remplacer le faux-texte
              dès qu'il est prêt ou que la mise en page est achevée.
              <br />
              <br />
              Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
              Lipsum. Le lorem ipsum est, en imprimerie, une suite de mots sans
              signification utilisée à titre provisoire pour calibrer
            </p>
          </div>
          <div className="mx-auto ">
            <Image src={line} alt="line" height={500} width={25} />
          </div>
          <div className="basis-2/3">
            <h3 className="font-sec text-forth text-center">
              We Love What We Do
            </h3>
            <div className="grid grid-cols-2 mt-10 w-1/2 mx-auto font-sec text-center text-2xl gap-5">
              <div className="flex flex-col gap-0 ">
                <p>32</p>
                <p>Cities</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>32</p>
                <p>Cities</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>32</p>
                <p>Cities</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>32</p>
                <p>Cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-sec text-forth text-center font-thin">
          {" "}
          Top Destination{" "}
        </h1>
        <Destination />
      </section>
    </div>
  );
};

export default Home;
