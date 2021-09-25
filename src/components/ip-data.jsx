import React from "react";
import styles from "./ip-data.module.css";

import arrow from "../images/icon-arrow.svg";

function IPData() {
  return (
    <div className={styles["data-container"]}>
      <h1>IP Address Tracker</h1>
      <form>
        <input></input>
        <button>
          <img src={arrow} alt="" />{" "}
        </button>
      </form>
      <div className={styles["info-container"]}>
        <div>
          <h6>IP ADDRESS</h6>
          <p>Loading...</p>
        </div>
        <div>
          <h6>LOCATION</h6>
          <p>Loading...</p>
        </div>
        <div>
          <h6>TIMEZONE</h6>
          <p>Loading...</p>
        </div>
        <div>
          <h6>ISP</h6>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
}

export default IPData;
