import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { filterListing } from "./store";
const Filter = () => {
  const [FilterListingData, setFilterListingData] = useAtom(filterListing);
  const [filterTerm, setFilterTerm] = useState(null);
  const [submitTerm, setSubmitTerm] = useState(null);
  const [surfaceTerm, setSurfaceTerm] = useState(null);
  const [bedroomsTerm, setbedroomsTerm] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const onSubmit = () => {
    // setFilterTerm(filterTerm);
    // setSubmitTerm(submitTerm);
    // setSurfaceTerm(surfaceTerm);
    // setbedroomsTerm(bedroomsTerm);
    //setSearchTerm(searchTerm);
    fetch(`api/listing`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        q: searchTerm,
        location: filterTerm,
        bathnum: parseInt(submitTerm),
        surfacesize: parseInt(surfaceTerm),
        bednum: parseInt(bedroomsTerm),  
      }),
    })
      .then((stream) => stream.json())
      .then((data) => setFilterListingData(data))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(onSubmit, []);
  return (
    <div className="flex">
      <div className="form-control px-10 mb-10 md:px-40 md:mb-10">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="w-10">
        <button
          className="btn btn-outline  btn-sm modal-button"
          onClick={onSubmit}
        >
          Search
        </button>
      </div>
      <div className="lg:flex lg:space-x-10 lg:justify-center overscroll-auto hover:overscroll-contain mb-10 px-20">
        <div className="flex mb-3 space-x-5 justify-center flex-wrap ">
          <div className="form-control  max-w-xs">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select
              className="select select-bordered select-md w-24 "
              onChange={(event) => {
                setFilterTerm(event.target.value);
              }}
            >
              <option defaultValue={null}>Any</option>
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
              <span className="label-text">Bathrooms</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-24 "
              onChange={(event) => {
                setSubmitTerm(event.target.value);
              }}
            ></input>
          </div>
          <div className=" flex mb-3 space-x-5 pr-5 justify-start flex-wrap">
            <div className="form-control  max-w-xs">
              <label className="label">
                <span className="label-text">Surface size</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-24 "
                onChange={(event) => {
                  setSurfaceTerm(event.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Bedrooms</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-24 "
                onChange={(event) => {
                  setbedroomsTerm(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <button
            className="btn btn-outline  btn-sm modal-button"
            onClick={onSubmit}
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
