import React from "react";
import logo from "../Images/logo.svg";
import Card from "../UI/Card";
import Styles from "./Balance.module.css";


const Balance = () => {
  return (
    <Card className={Styles.balanceContainer}>
      <div className={Styles.balanceBlock}>
        <div className={Styles.balanceHeading}>My balance</div>
        <div className={Styles.balanceAmount}> $3.00</div>
      </div>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </Card>
  );
};

export default Balance;
