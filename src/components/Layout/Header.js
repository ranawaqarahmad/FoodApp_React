import React, { Fragment } from "react";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Meals Table" />
      </div>
    </Fragment>
  );
};

export default Header;
