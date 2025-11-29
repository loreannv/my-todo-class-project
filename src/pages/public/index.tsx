import Login from "../../components/login";

const Public = () => {
  return (
    <>
      <h1>Public</h1>
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break the world
      </button>
      <Login />
    </>
  );
};

export default Public;
