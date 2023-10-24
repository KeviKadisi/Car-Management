import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { image,  model, description, year, price, brand } = props;

  return (
    <div className={classes.car}>
      <img className={classes.image} src={image} alt="Benz"/>
      <div>
        <h3 className={classes.title}>Brand : {brand}</h3>
        <p className={classes.model}>Model : {model}</p>
        <p className={classes.description}>Info : {description}</p>
        <div className={classes.extraInfo}>
          <p className={classes.year}>Year : {year}</p>
          <p className={classes.price}>Price : {price} $</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
