import { useAtom } from "jotai";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsHeart } from "react-icons/bs";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { MdPhotoSizeSelectSmall } from "react-icons/md";
import { searchListing } from "./store";
const Product = () => {
  const [data] = useAtom(searchListing);

  // useEffect(() => {
  //     setLoading(true)
  //     fetch('api/listing')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data)
  //         setLoading(false)
  //       })
  //   }, [])
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center">
      {data &&
        data.map((item) => (
          <div key={item._id}>
            <div className=" flex gap-10 md:flex px-10 md:py-10 ">
              <div className=" card w-96 bg-base-100 shadow-xl w-30">
                <figure className="flex flex-wrap">
                  <a>{item.photo}</a>
                  <Image
                    src="https://api.lorem.space/image/shoes?w=400&h=225"
                    alt="Shoes"
                  />
                </figure>
                <div className=" card-body ">
                  <h1 className="card-title">{item.title}</h1>
                  <h2>{item.location}</h2>
                  <div className="flex gap-5  ">
                    <label>
                      <FaBed size="25" />
                    </label>
                    <label>{item.bednum}</label>
                    <label>
                      <FaBath size="20" />
                    </label>
                    <label>{item.bathnum}</label>
                    <label>
                      <MdPhotoSizeSelectSmall size="20" />
                    </label>
                    <label>{item.surfacesize}</label>
                  </div>
                  <div className="justify-end card-actions">
                    <p>{item.price}</p>
                    <button>
                      <label className="bg-base-600 hover:bg-base-700">
                        <BsHeart size={20} />
                      </label>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
