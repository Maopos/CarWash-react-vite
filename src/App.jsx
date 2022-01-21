import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState({});

  useEffect(() => {
    const getCarsLocalStorage = () => {
      const carsLS = JSON.parse(localStorage.getItem("Cars")) ?? [];
      setCars(carsLS);
    };
    getCarsLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("Cars", JSON.stringify(cars));
    // ojo stringify
  }, [cars]);

  const deleteCar = (id) => {
    const updateCars = cars.filter((i) => i.id !== id);

    setCars(updateCars);
  };

  return (
    <div>
      <Header />
      <div className="md:flex m-5">
        <Form cars={cars} setCars={setCars} car={car} setCar={setCar} />
        <List cars={cars} setCar={setCar} deleteCar={deleteCar} />
      </div>
    </div>
  );
}

export default App;
