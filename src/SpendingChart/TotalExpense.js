import React from "react";
import Styles from "./TotalExpense.module.css";

const TotalExpense = () => {
  return (
    <div className={Styles.totalExpenseContainer}>
      <div className={Styles.expenseInfoBlock}>
        <div className={Styles.blockHeading}>Total this month</div>
        <div className={Styles.expenseAmount}>$599.28</div>
      </div>
      <div className={Styles.expenseInfoBlock}>
        <div className={Styles.expenseStats}>+2.5%</div>
        <div className={Styles.blockHeading}>from last month</div>
      </div>
    </div>
  );
};

export default TotalExpense;
