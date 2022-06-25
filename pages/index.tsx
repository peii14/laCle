import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="layout">
      <div className="h-screen">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
