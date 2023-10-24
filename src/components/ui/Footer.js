import React from "react";
import classes from './Footer.module.css';

const Footer =() =>{
 return (
    <div className={classes.footer} >
      <ul>
        <li><strong>Mercedes-Benz</strong></li>
        <li>Luxury</li>
        <li>Elegance</li>
        <li>Modern</li>
      </ul>
      <ul>
        <li><strong>Bmw</strong></li>
        <li>Dynamic</li>
        <li>High-quality</li>
        <li>Sporty</li>
      </ul>
      <ul>
        <li><strong>Audi</strong></li>
        <li>Tech</li>
        <li>Elegant</li>
        <li>Upscale interior</li>
      </ul>
      <ul>
        <li><strong>Range Rover</strong></li>
        <li>Stylish</li>
        <li>Luxury SUV</li>
        <li>Off-road</li>
      </ul>
    </div>
 );
};
export default Footer;