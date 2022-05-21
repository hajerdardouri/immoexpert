const Logout = () => {
  const logOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div>
      <button className="btn btn-base" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};
export default Logout;
