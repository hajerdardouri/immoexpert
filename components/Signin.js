const Signin = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle " />
      <div className="modal py-60">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 modal-action">
              <button className="">
                <label htmlFor="my-modal" className="btn btn-base">
                  Submit
                </label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
