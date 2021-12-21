import type { NextPage } from "next";
import React from "react";
import Meta from "../components/Meta";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [time, setTime] = useState("00:00:00 PM");

  function updateTime() {
    let current = new Date().toLocaleString("en-US", {
      timeZone: "Europe/London",
    });
    setTime(current.toUpperCase().slice(-11, -1) + "M");
    setTimeout(updateTime, 1000);
  }

  useEffect(() => {
    updateTime();
  });

  return (
    <React.Fragment>
      <Meta
        title="Alfie Phillips"
        description="Hey baby how you doing."
        url="https://alfiephillips.com"
        keywords="personal website, mail@alfiephillips.com, portfolio"
      />
    </React.Fragment>
  );
};

export default Home;