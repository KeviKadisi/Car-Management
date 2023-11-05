import { useContext, useEffect, useState } from "react";
import CartContext from "../store/CartContext";
import Container from "../components/layouts/Container";
import classes from "./cart.module.css";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [cars, setCars] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(
      "https://car-management-5e8a2-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((carsData) => {
        const carsArray = Object.keys(carsData).map((key) => {
          return {
            id: key,
            ...carsData[key],
          };
        });

        const selectedCars = carsArray.filter((car) =>
          cartCtx.cart.includes(car.id)
        );

        let sum = 0;
        selectedCars.forEach((selectedCar) => {
          sum += parseInt(selectedCar.price);
        });
        setTotal(sum);

        setCars(selectedCars);
      });
  }, []);

  return (
    <Container>
      {cars.map((car) => (
        <div key={car.id} className={classes.cartItem}>
          <div>
            <img className={classes.image} src={car.image} />
            <div className={classes.info}>
              <h2 className={classes.title}>
                {car.brand} {car.model}
              </h2>
              <p className={classes.year}>{car.year}</p>
              <p className={classes.description}>{car.description}</p>
            </div>
          </div>
          <div className={classes.price}>{car.price}$</div>
        </div>
      ))}
      <h2 className={classes.total}>Total Price: {total}$</h2>
    </Container>
  );
};

export default Cart;
