import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { searchListing } from "./store";
const Search = () => {
  const [ , setSearchListingData] = useAtom(searchListing);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitTerm, setSubmitTerm] = useState("");
  const handleClick = () => {
    setSubmitTerm(searchTerm);
  };

  useEffect(() => {
    fetch(`api/listing/${submitTerm ? `?q=${submitTerm}` : ""}`)
      .then((stream) => stream.json())
      .then((data) => setSearchListingData(data))
      .catch((err) => {
        console.log(err);
      });
  }, [submitTerm]);

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
      <div>
        <button
          className="btn btn-outline  btn-sm modal-button"
          onClick={handleClick}
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default Search;
