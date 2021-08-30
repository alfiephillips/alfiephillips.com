import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [time, setTime] = useState("00:00:00 PM");

  function updateTime() {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    setTime(current.toUpperCase().slice(-11, -1) + "M");
    setTimeout(updateTime, 1000);
  }

  useEffect(() => {
    updateTime();
  }, [time]);

  return (
    <React.Fragment>
      <Meta
        title="Alfie Phillips"
        description="Welcome to the website of Alfie Phillips, please contact me on my email: mail@alfiephillips.com"
        url="https://alfiephillips.com"
        keywords="personal website, mail@alfiephillips.com, portfolio"
      />
      <div className={styles.home__container}>
        <h1 className={styles.home__container_text}>Alfie Phillips</h1>
        <h3 className={styles.home__container_time}>{time}</h3>
      </div>
    </React.Fragment>
  );
};

export default Home;
