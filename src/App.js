import { useState, useEffect } from "react";
import Navbar from "./components/layouts/Navbar";
import Card from "./components/ui/Card";
import Container from "./components/layouts/Container";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      "https://car-managment-b1df2-default-rtdb.europe-west1.firebasedatabase.app/cars.json"
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
      <Navbar />
      <Container>
        {cars.map((car, index) => (
          <Card
            key={car.id}
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Mercedes-Benz_W223_IMG_3970.jpg/1200px-Mercedes-Benz_W223_IMG_3970.jpg"
            title={car.title}
            model={car.model}
            description={car.description}
            year={car.year}
            price={car.price}
          />
        ))}
      </Container>
      <div>Footer</div>
    </>
  );
}

export default App;
