import { useState } from "react";
import { useForm } from "react-hook-form";
const Signup = () => {
  const { register, handleSubmit } = useForm();
  const [passwordShown] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
    fetch("api/create_user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        console.log(response);
      })
      .catch(async (err) => {
        console.error(err);
      });
  };

  return (
    <form>
      <div>
        <input type="checkbox" id="my-modal-5" className="modal-toggle " />
        <div className="modal py-60">
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("username")}
                  onTextChange={(value) => setValue("lastChange", value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  {...register("email")}
                  onTextChange={(value) => setValue("lastChange", value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="Password"
                  name="password"
                  type={passwordShown ? "text" : "password"}
                  {...register("password")}
                  className="input input-bordered"
                  onTextChange={(value) => setValue("lastChange", value)}
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div>
                <select
                  className="select select-bordered w-full max-w-xs"
                  {...register("account_type")}
                >
                  <option disabled selected>
                    you are
                  </option>
                  <option>Client</option>
                  <option>Agency</option>
                </select>
              </div>
              <div className="form-control mt-6 modal-action">
                <button
                  className="my-modal-5"
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                >
                  <label htmlFor="my-modal-5" className="btn btn-base">
                    Sign up
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
