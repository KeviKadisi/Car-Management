import { useState, useEffect } from "react";
import Container from "../components/layouts/Container";
import Card from "../components/ui/Card";

const Homepage = (props) => {
  const [cars, setCars] = useState([]);

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
        const carsArray = Object.keys(carsData).map((key) => ({
          id: key,
          ...carsData[key],
        }));
        setCars(carsArray.splice(0, 6));
      });
  }, []);
  return (
    <>
      <Container>
        {cars.map((car, index) => (
          <Card
            key={car.id}
            brand= {car.brand}
            image={car.image}
            model={car.model}
            description={car.description}
            year={car.year}
            price={car.price}
          />
        ))}
      </Container>
    </>
  );
};

export default Homepage;
