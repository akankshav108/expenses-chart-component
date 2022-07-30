import React from "react";
import Styles from "./Chart.module.css";

const Chart = (props) => {
  return (
    <div className={Styles.chartContainer}>
          <div className={Styles.barBlock}>
            <div className={Styles.amount}>${props.amount}</div>
            <div className={`${Styles.bar} ${props.dayToday? Styles.activeBar : ''}`} style={{height : props.barHeight}}></div>
            <div className={Styles.day}>{props.day}</div>
          </div>
    </div>
  );
};

export default Chart;
