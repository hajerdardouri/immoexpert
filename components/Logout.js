const Logout = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="flex px-60 mb-20 w-12">
      <button className="btn btn-base  " onClick={logOut}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
