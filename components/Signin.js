import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Signin = () => {
  const { register, handleSubmit } = useForm();
  const [passwordShown] = useState(false);
  const router = useRouter();
  const onSubmit = (data) => {
    console.log(data);
    fetch("api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        let resData = await response.json();
        console.log(resData);
        localStorage.setItem("token", "Bearer " + resData.token);
      })
      .catch(async (err) => {
        console.error(err);
      });
    router.push("/profile");
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle " />
      <div className="modal py-60">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
            <div className="form-control mt-6 modal-action">
              <button
                className="my-modal btn btn-base"
                type="submit"
                onClick={handleSubmit(onSubmit)}
                href="/profile"
              >
                Signin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
