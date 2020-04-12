import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api/index";

import styles from "./App.module.css";

const App = () => {
  const [data, setData] = useState({});

  const fetchTrackerData = async () => {
    const data = await fetchData();
    setData(data);
    return data;
  };

  useEffect(() => {
    fetchTrackerData();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <Chart />
      <CountryPicker />
    </div>
  );
};

export default App;
