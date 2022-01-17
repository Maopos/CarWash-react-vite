const Car = ({ car, setCar, deleteCar }) => {
  const { plate, owner, phone, date, time, id } = car;

  const handleDelete = () => {
    const res = confirm("Do you really want to delete this Vehicle from list?");
    if (res) {
      deleteCar(car.id);
    }
  };

  return (
    <div className="bg-gray-50 rounded-md p-8 pl-12 md:ml-5 mb-5 shadow-md shadow-gray-400">
      <p className="text-gray-400">
        License Plate:{" "}
        <span className="font-bold text-lg text-red-600">{plate}</span>{" "}
      </p>
      <hr />
      <p className="text-gray-400">
        Owner Name:{" "}
        <span className="font-bold text-lg text-black">{owner}</span>{" "}
      </p>
      <p className="text-gray-400">
        Phone Number:{" "}
        <span className="font-bold text-lg text-black">{phone}</span>{" "}
      </p>
      <p className="text-gray-400">
        Check-In Date:{" "}
        <span className="font-bold text-lg text-black">{date}</span>{" "}
      </p>
      <p className="text-gray-400">
        Check-In Time:{" "}
        <span className="font-bold text-lg text-black">{time}</span>{" "}
      </p>
      <div className="mt-5">
        <button
          type="button"
          className="bg-yellow-300 hover:bg-yellow-400 py-1 px-8 rounded-md transition-all cursor-pointer"
          onClick={() => setCar(car)}
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 text-white py-1 px-8 ml-5 rounded-md transition-all cursor-pointer"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Car;
