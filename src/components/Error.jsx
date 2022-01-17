const Error = ({ msg }) => {
  return (
    <div>
      <p className="bg-red-200 p-3 text-red-700 mt-3 text-center rounded-md">
        {msg}
      </p>
    </div>
  );
};

export default Error;
