import React, { useState, useEffect } from "react";

import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CountryPicker.module.css";

import { fetchCountries } from "../../api/index";

const CountryPicker = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  const fetchCountriesData = async () => {
    const data = await fetchCountries();
    setCountries(data);
    return data;
  };

  useEffect(() => {
    fetchCountriesData();
  }, [setCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="">Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
