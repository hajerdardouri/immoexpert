import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { useForm } from "react-hook-form";


const ProductDetails = () => {
  const router = useRouter();
  const { _id } = router.query;

  const [product, updateproduct] = useState();
  const { register, handleSubmit } = useForm();
  const saveNumber =  (data) => {
     fetch("/api/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        _id,
        number: parseInt(data.phone),
      }),
    })
      .then(async (response) => {
        console.log(response);
      })
      .catch(async (err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    fetch("/api/product_details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id,
      }),
    })
      .then(async (response) => {
        let resData = await response.json();
        updateproduct(resData);
        console.log(resData);
      })
      .catch(async (err) => {
        console.error(err);
      });
  }, [router.query]);

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className=" flex hero-content flex-col lg:flex-row">
          <div>
            <img
              src={`http://localhost:8082/api/uploads/${product?.photo}`}
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="grid justify-center px-40 ">
            <div className="tab-bordered mb-10">
              <div>
                <h1 className="text-5xl py-10">{product?.title}</h1>
              </div>
              <div className="flex py-3">
                <ImLocation size={15} />
                <h1 className="text-xl px-3">{product?.location}</h1>
              </div>
            </div>
            <div className="tab-bordered flex mb-10 gap-x-5">
              <div className="flex py-3">
                <FaBed size={15} />
                <h1 className="text-xl px-3">{product?.bednum}</h1>
              </div>
              <div className="flex py-3">
                <FaBath size={15} />
                <h1 className="text-xl px-3">{product?.bathnum}</h1>
              </div>
              <div className="flex py-3">
                <MdPhotoSizeSelectSmall size={15} />
                <h1 className="text-xl px-3">{product?.surfacesize}</h1>
              </div>
            </div>
            <div className="flex py-3">
              <h1 className="text-3xl px-3">{product?.price}</h1>
              <h2 className="text-md">TND</h2>
            </div>
            <div>
              <label
                htmlFor="my-modal-6"
                className="btn btn-outline modal-button "
                
              >
                Contact Agency
              </label>

            </div>
          </div>
        </div>
      </div>
      <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle " />
      <div className="modal py-60">
        <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter your phone number </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                {...register("phone")}
                onTextChange={(value) => setValue("lastChange", value)}
              />
            </div>
            <div className="form-control mt-6 modal-action">
              <button
                className="my-modal-6 btn btn-base"
                type="submit"
                onClick={handleSubmit(saveNumber)}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default ProductDetails;
