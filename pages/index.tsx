import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import her from "../images/home/hero1.png";
const Home: NextPage = () => {
  return (
    <div className="layout">
      <div className="h-screen">
        <Hero content="" subTitle="About Us" title="la Clé" image={her} />
      </div>
    </div>
  );
};

export default Home;
