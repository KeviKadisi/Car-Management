import classes from "./Navbar.module.css";
import React,{useState} from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen]= useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  };



  return (

   
    <nav className={classes.navbar}>
      <div className={classes.container }>
        <Link className={`${classes.brand}  ${classes["menu-open"]}`} to="/">
          Auto-Management
        </Link>
      
        <Link className={`${classes.cars} ${classes["menu-open"]}`} to="/cars">
          Cars
        </Link>
        <Link className={`${classes.cars} ${classes["menu-open"]}`} to="/motorcycles">
          Motorcycles
        </Link>
        <Link className={`${classes.cars} ${classes["menu-open"]}`} to="/cart">
          Cart
        </Link>
     
      </div>
    </nav>
  );
};

export default Navbar;
