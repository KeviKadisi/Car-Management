import classes from "./Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <a className={classes.brand} href="/">
          Navbar
        </a>
        <a className={classes.cars} href="/cars">Cars</a>
      </div>
    </nav>
  );
};

export default Navbar;
