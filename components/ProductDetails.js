import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ImLocation } from "react-icons/im";
import { FaBed } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { FaBath } from "react-icons/fa";
const ProductDetails = () => {
  const router = useRouter();
  const [product, updateproduct] = useState();
  useEffect(() => {
    const { _id } = router.query;
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
      <div className="hero min-h-screen bg-base-200">
        <div className=" flex hero-content flex-col lg:flex-row">
          <div>
            <img
              src="https://api.lorem.space/image/movie?w=260&h=400"
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
              <button
              htmlFor="my-modal-6"
                className="btn btn-outline modal-button "
                
              >
                Contact Agency
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
