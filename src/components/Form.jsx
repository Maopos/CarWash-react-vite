import { useState, useEffect } from "react";
import Error from "./Error";

const Form = ({ cars, setCars, car, setCar }) => {
  const [plate, setPlate] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [error, saveError] = useState(false);

  useEffect(() => {
    if (Object.keys(car).length > 0) {
      setPlate(car.plate);
      setOwner(car.owner);
      setPhone(car.phone);
      setDate(car.date);
      setTime(car.time);
    }
  }, [car]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const dateNow = Date.now().toString(36);
    return random + dateNow;
  };

  const onChangePlate = (e) => {
    setPlate(e.target.value);
  };
  const onChangeOwner = (e) => {
    setOwner(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeDate = (e) => {
    setDate(e.target.value);
  };
  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ([plate, owner, phone, date, time].includes("")) {
      saveError(true);
      setTimeout(() => {
        saveError(false);
      }, 1500);
      return;
    }

    const newCar = {
      plate,
      owner,
      phone,
      date,
      time,
    };

    if (car.id) {
      // Editando
      newCar.id = car.id;
      const updatedCars = cars.map((i) => (i.id === car.id ? newCar : i));

      setCars(updatedCars);
      setCar({});
    } else {
      // Creando registro
      newCar.id = generateId();
      setCars([...cars, newCar]);
    }

    setPlate("");
    setOwner("");
    setPhone("");
    setDate("");
    setTime("");
  };

  return (
    <div className=" md:w-1/2 lg:w-2/5 ">
      <img
        className="mx-auto h-16 w-auto my-2"
        src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
        alt="Workflow"
      />
      <p className="text-center text-red-600 text-3xl font-sans mb-2">
        Add Vehicle
      </p>
      <div className="p-8 bg-gray-50 w-full rounded-lg shadow-md shadow-gray-400 mb-5">
        <form onSubmit={onSubmit}>
          {error ? <Error msg={"All fields are required..."} /> : null}
          <div className="mt-5">
            <label htmlFor="plate" className="ml-1 text-black font-sans">
              License Plate
            </label>
            <input
              id="plate"
              type="text"
              className="border-2 border-red-600  p-2 w-full rounded "
              placeholder="License Plate"
              value={plate.toUpperCase()}
              onChange={onChangePlate}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="owner" className="ml-1 text-black font-sans">
              Owner Name
            </label>
            <input
              id="owner"
              type="text"
              className="border-2 border-red-600  p-2 w-full rounded  "
              placeholder="Owner Name"
              value={owner}
              onChange={onChangeOwner}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="phone" className="ml-1 text-black font-sans">
              Phone number
            </label>
            <input
              id="phone"
              type="text"
              className="border-2 border-red-600 p-2 w-full rounded  "
              placeholder="Phone number"
              value={phone}
              onChange={onChangePhone}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="date" className="ml-1 text-black font-sans">
              Check-In Date
            </label>
            <input
              id="date"
              type="date"
              className="border-2 border-red-600 p-2 w-full rounded  "
              placeholder="Phone number"
              value={date}
              onChange={onChangeDate}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="time" className="ml-1 text-black font-sans">
              Check-In Time
            </label>
            <input
              id="time"
              type="time"
              className="border-2 border-red-600 p-2 w-full rounded  mb-5"
              placeholder="Phone Number"
              value={time}
              onChange={onChangeTime}
            />
          </div>

          <input
            type="submit"
            value={car.id ? "Edit Vehicle" : "Save"}
            className={
              car.id
                ? "bg-yellow-500  rounded text-center w-full p-2 hover:bg-yellow-400 cursor-pointer transition-all"
                : "bg-green-700  rounded text-center text-white font-semibold w-full p-2 hover:bg-green-800 cursor-pointer transition-all"
            }
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
