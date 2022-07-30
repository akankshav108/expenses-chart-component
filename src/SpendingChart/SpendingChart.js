import React from "react";
import Styles from "./SpendingChart.module.css";
import Chart from "./Chart";
import TotalExpense from "./TotalExpense";

const SpendingChart = (props) => {
  const expenseData = props.data;
  const dayToday = new Date().getDay();

  // const barHeight = "0%";

  const allAmounts = props.data.map((dataPoints) => dataPoints.amount);
  const maxValue = Math.max(...allAmounts);

  return (
    <div className={Styles.chartContainer}>
      <div className={Styles.chartHeading}>Spending - Last 7 days</div>
      <div className={Styles.barContainer}>
        {expenseData.map((element) => {
          return (
            <Chart
              key={element.id}
              id={element.id}
              day={element.day}
              amount={element.amount}
              barHeight={Math.round((element.amount / maxValue) * 100) + "%"}
              dayToday={dayToday === element.id ? true : false}
            />
          );
        })}
      </div>
      <hr></hr>
      <TotalExpense />
    </div>
  );
};

export default SpendingChart;
