import React from "react";

const Carfilter = (props) => {
  const brandFilterHandler = (e) => {
    const brandFilter = e.target.value;

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

        if (brandFilter) {
          const filteredCars = carsArray.filter(
            (car) => car.brand === brandFilter
          );
          props.setCars(filteredCars);
        } else {
          props.setCars(carsArray);
        }
      });
  };

  return (
    <div className="carFilters">
      <select name="brand" id="brand" onChange={brandFilterHandler}>
        <option value="" defaultValue>
          ...
        </option>
        <option value="mercedes-benz">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="bmw">BWM</option>
        <option value="range-rover">Range Rover</option>
      </select>
    </div>
  );
};

export default Carfilter;
