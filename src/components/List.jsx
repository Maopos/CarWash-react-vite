import Car from "./Car";

const List = ({ cars, setCar, deleteCar }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5">
      <img
        className="mx-auto h-32 w-auto my-2"
        src={
          cars.length === 0
            ? "http://cdn.shopify.com/s/files/1/0065/4917/6438/products/an-empty-underground-parking-lot-background_90c8721a-567b-486a-8aa6-084f9e17c476.jpg?v=1549230926"
            : "http://cdn.shopify.com/s/files/1/0065/4917/6438/products/an-underground-parking-lot-filled-with-cars-background_90a2d36e-4960-4ea7-886f-5140f0681f10.jpg?v=1549230898"
        }
        alt="Workflow"
      />
      <p className="text-center text-red-600 text-3xl font-sans mb-2">
        {cars.length === 0 ? "Empty List" : "Vehicles List"}
      </p>
      {cars.map((i) => {
        return <Car key={i.id} car={i} setCar={setCar} deleteCar={deleteCar} />;
      })}
    </div>
  );
};

export default List;
