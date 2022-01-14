const Form = () => {
  return (
    <div className="bg-gray-100 md:w-1/2 lg:w-2/5 w-full rounded-lg shadow-lg shadow-slate-600">
      <div className="m-4">
        <img
          className="mx-auto h-16 w-auto my-2"
          src="https://i.pinimg.com/originals/91/06/02/910602979bda92b9f88144d313f52725.png"
          alt="Workflow"
        />
        <p className="text-center text-red-600 text-3xl font-sans">
          Add Vehicle
        </p>

        <div className="mt-5">
          <label htmlFor="plate" className="ml-1 text-black font-sans">
            License Plate
          </label>
          <input
            id="plate"
            type="text"
            className="border-2 border-red-600  p-2 w-full rounded text-xl"
            placeholder="License Plate"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="owner" className="ml-1 text-black font-sans">
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            className="border-2 border-red-600  p-2 w-full rounded text-xl "
            placeholder="Owner Name"
          />
        </div>
        <div className="mt-5">
          <label htmlFor="phone" className="ml-1 text-black font-sans">
            Phone number
          </label>
          <input
            id="phone"
            type="text"
            className="border-2 border-red-600 p-2 w-full rounded text-xl "
            placeholder="Phone number"
          />
        </div>

        <input
          type="submit"
          value={"Save"}
          className="bg-red-600 rounded-lg w-full mt-5 p-3 text-zinc-50 text-2xl"
        />
      </div>
    </div>
  );
};

export default Form;
