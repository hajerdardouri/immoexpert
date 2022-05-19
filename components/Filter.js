import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { filterListing } from "./store";
const Filter = () => {
  const [FilterListingData, setFilterListingData] = useAtom(filterListing);
  const [filterTerm, setFilterTerm] = useState("");
  const [submitTerm, setSubmitTerm] = useState("");
  const handleClick = () => {
    setSubmitTerm(filterTerm);
  };

  useEffect(() => {
    fetch(`api/listing/${submitTerm ? `?f=${submitTerm}` : ""}`)
      .then((stream) => stream.json())
      .then((data) => setFilterListingData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [submitTerm]);
  return (
    <div className="lg:flex lg:space-x-10 lg:justify-center overscroll-auto hover:overscroll-contain">
      <div className="flex mb-3 space-x-5 justify-center flex-wrap ">
        <div className="form-control  max-w-xs">
          <label className="label">
            <span className="label-text">State</span>
          </label>
          <select
            className="select select-bordered select-md w-24 "
            onClick={handleClick}
            onChange={(event) => {
              setFilterTerm(event.target.value);
            }}
          >
            <option defaultValue={""}>Any</option>
            <option>Gafsa</option>
            <option>Beja</option>
            <option>Ben Arous</option>
            <option>bizerte</option>
            <option>Gebes</option>
            <option>Kairouan</option>
            <option>Kasserine</option>
            <option>kebili</option>
            <option>Kef</option>
            <option>Ariana</option>
            <option>Mehdia</option>
            <option>Monastir</option>
            <option>Nabeul</option>
            <option>Sfax</option>
            <option>Sidi Bouzid</option>
            <option>Siliana</option>
            <option>Sousse</option>
            <option>Tozeur</option>
            <option>tunis</option>
            <option>Zaghouan</option>
            <option>Medenine</option>
            <option>Manouba</option>
            <option>Tataouine</option>
          </select>
        </div>
        <div className="form-control  max-w-xs">
          <label className="label">
            <span className="label-text">City</span>
          </label>
          <select className="select select-bordered select-md w-24 ">
            <option defaultValue={""}>Any</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>
        </div>
        <div className=" flex mb-3 space-x-5 pr-5 justify-start flex-wrap">
          <div className="form-control  max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select className="select select-bordered select-md w-24 ">
              <option defaultValue={""}>Any</option>
              <option>Apartement</option>
              <option>Bungalow</option>
              <option>Offices</option>
              <option>Duplex</option>
              <option>Business</option>
              <option>Farm/Ranch</option>
              <option>Loft</option>
              <option>House</option>
              <option>Guest House</option>
              <option>PentHouse</option>
              <option>Commercial Property</option>
              <option>Beach Property</option>
              <option>Lands</option>
              <option>Triplex</option>
              <option>Villa</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Bedrooms</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-24 "
              onClick={handleClick}
              onChange={(event) => {
                setFilterTerm(event.target.value);
              }}
            ></input>
          </div>
        </div>
      </div>
      <div className=" flex mb-11 space-x-5 justify-center lg:py-12 flex-wrap">
        <label>
          <span className="label-text">Residential</span>
        </label>
        <input type="checkbox" className="toggle toggle-base" />
        <label>
          <span className="label-text">Professional</span>
        </label>
        <input type="checkbox" className="toggle toggle-base" />
      </div>
    </div>
  );
};

export default Filter;
