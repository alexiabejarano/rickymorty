import React from "react";
import { useState } from "react";
import styles from "./Hero.module.css";


const Hero = ({handleSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  
  return (
    <section className={styles["hero"]}>
      <div>
        <div>
          <p>
            <input
              type="text"
              placeholder="Rick Sanchez"
              onChange={handleChange}
            />
          </p>
          <p onClick={ ()=> handleSearch(searchValue)}>
            Search
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
