import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";

import { fetchData } from "./api/index";

import styles from "./App.module.css";
import image from "./images/covid-19.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  const fetchTrackerData = async () => {
    const data = await fetchData();
    setData(data);
    return data;
  };

  useEffect(() => {
    fetchTrackerData();
  }, []);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
