/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import her from "../images/home/hero1.png";
import line from "../images/line.png";
import Destination from "../components/Destination";
import Neuromorphism from "../components/Neuromorphism";
import blur from "../images/blur.png";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Season from "../components/Season";
import Testimony from "../components/Testimony";
import dot from "../images/dot.png";
import DestinationCard from "../components/DestinationCard";

const Home: NextPage = () => {
  return (
    <div className="layout">
      <div className="h-screen m-auto flex items-center ">
        {/* <div className="h-max"> */}
        <Hero
          content=" An Indonesian guide in France will accompany your trip while
          providing interesting information and fun facts while visiting
          many exciting places such as museums, galleries, and other
          interesting buildings."
          subTitle="The Key"
          title="La Clé"
          cp={true}
          image={her}
        />
        {/* </div> */}
      </div>
      <section>
        <h1 className="font-sec text-center text-forth font-thin">About Us</h1>
        <div className="flex md:flex-row flex-col gap-5 max-w-4xl mx-auto text-forth py-10 h-max">
          <div className="basis-2/3 ">
            <p className="w-11/12 mx-auto md:px-0 px-5">
              Vacationing in France is a dream for many people because of the
              Eiffel tower, the most famous tower in the world, Chamonix with
              its beautiful snow mountain panorama, and many more cool
              destinations that can be visited. If you have booked your flight
              ticket, immediately make sure that you can enjoy the whole city
              without any hassle, no language barrier, no transportation
              problem, no hassle with quality photos, and no hassle with
              efficient travel plans, La Clé Guide is the solution.
              <br />
              <br />
              There's nothing complicated, you need to order, and on the day, an
              experienced and friendly tour guide is ready to pick you up and
              your group.
            </p>
          </div>
          <div className="mx-auto md:block hidden ">
            <Image src={line} alt="line" height={500} width={25} />
          </div>
          <div className="basis-2/3 md:my-0 my-10">
            <h3 className="font-sec text-forth text-center">
              We Love What We Do
            </h3>
            <div className="grid grid-cols-2 mt-10 w-1/2 mx-auto font-sec text-center text-2xl gap-5">
              <div className="flex flex-col gap-0  ">
                <p>36</p>
                <p>Cities</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>3</p>
                <p>Team</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>10</p>
                <p>Guide</p>
              </div>
              <div className="flex flex-col gap-0 ">
                <p>3</p>
                <p>Photographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-sec text-forth text-center font-thin mt-10">
          {" "}
          Top Destination{" "}
        </h1>
        <Destination />
      </section>
      <section className="relative mt-20 ">
        <h1 className="font-sec text-forth text-center font-thin">
          Season Destination
        </h1>
        <div className="z-10 grid md:grid-cols-2 w-full grid-cols-1 gap-10 mx-auto mt-10">
          <div className="md:w-1/2 w-2/3 mx-auto md:ml-auto md:mx-0 z-20">
            <Season status={1} link="/Winter" />
          </div>
          <div className="md:w-1/2 md:mr-auto w-2/3 mx-auto md:mx-0 z-20">
            <Season status={2} link="/Summer" />
          </div>
          <div className="md:w-1/2 md:ml-auto w-2/3 mx-auto md:mx-0 z-20">
            <Season status={3} link="/Spring" />
          </div>
          <div className="z-20 md:w-1/2 w-2/3 mx-auto md:mx-0 md:mr-auto">
            <Season status={4} link="/Autumn" />
          </div>
        </div>
        <div className="absolute z-0 -top-10 ">
          <Image alt="blur" src={blur} width={700} height={700} />
        </div>
        <div className="absolute z-0 -top-10 right-1/3 translate-x-1/2 ">
          <Image alt="blur" src={blur} width={400} height={500} />
        </div>
        <div className="absolute z-0 -bottom-32 ">
          <Image alt="blur" src={blur} width={500} height={400} />
        </div>
        <div className="absolute z-0 -bottom-32 right-32 ">
          <Image alt="blur" src={blur} width={500} height={400} />
        </div>
      </section>
      <section className="mt-20 md:w-8/12 w-2/3 mx-auto relative">
        <div className="absolute -top-5 -left-5">
          <Image alt="dot" src={dot} height={70} width={70} />
        </div>
        <Testimony />
      </section>
    </div>
  );
};

export default Home;
