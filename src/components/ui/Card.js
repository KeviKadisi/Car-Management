import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  const { image, title, model, description, year, price } = props;

  return (
    <div className={classes.car}>
      <img className={classes.image} src={image} />
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.model}>{model}</p>
        <p className={classes.description}>{description}</p>
        <div className={classes.extraInfo}>
          <p className={classes.year}>{year}</p>
          <p className={classes.price}>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
