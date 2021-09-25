import React from "react";
import { useRef, useState } from "react";
import styles from "./ip-data.module.css";

import arrow from "../images/icon-arrow.svg";

function IPData() {
  const ipInput = useRef();
  const [ipInfo, setIpInfo] = useState([]);

  function preventDefault(e) {
    e.preventDefault();
  }

  async function ipDataHandler() {
    const ipAddress = ipInput.current.value;

    console.log(ipAddress);

    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_XeMRqdoHP3Bneadf37Kqt7dI0FPYG&ipAddress=${ipAddress}`
    );

    const data = await response.json();

    const loadedData = [];

    for (const key in data) {
      if (key === "ip") {
        loadedData.push({
          ip: data[key],
        });
      } else if (key === "location") {
        loadedData.push(
          {
            location: `${data[key].city}, ${data[key].region} ${data[key].postalCode}`,
          },
          {
            timezone: data[key].timezone,
          }
        );
      } else if (key === "isp") {
        loadedData.push({
          isp: data[key],
        });
      }
    }

    setIpInfo(loadedData);
  }
  console.log(ipInfo);

  return (
    <div className={styles["data-container"]}>
      <h1>IP Address Tracker</h1>
      <form onSubmit={preventDefault}>
        <input ref={ipInput}></input>
        <button onClick={ipDataHandler}>
          <img src={arrow} alt="" />
        </button>
      </form>
      <div className={styles["info-container"]}>
        <div>
          <h6>IP ADDRESS</h6>
          <p>{ipInfo.length > 0 ? ipInfo[0].ip : "..."}</p>
        </div>
        <div>
          <h6>LOCATION</h6>
          <p>{ipInfo.length > 0 ? ipInfo[1].location : "..."}</p>
        </div>
        <div>
          <h6>TIMEZONE</h6>
          <p>{ipInfo.length > 0 ? ipInfo[2].timezone : "..."}</p>
        </div>
        <div>
          <h6>ISP</h6>
          <p>{ipInfo.length > 0 ? ipInfo[3].isp : "..."}</p>
        </div>
      </div>
    </div>
  );
}

export default IPData;
