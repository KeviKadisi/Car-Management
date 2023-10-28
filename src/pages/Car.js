import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Car = () => {
  const { carId } = useParams();

  const [car, setCar] = useState([]);
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

        const filteredCar = carsArray.filter((car) => car.id === carId)[0];

        setCar(filteredCar);
      });
  }, [carId]);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Car;
