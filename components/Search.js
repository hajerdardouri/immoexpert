import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { searchListing } from "./store";
const Search = () => {
  const [data, setData] = useAtom(searchListing);
  const [searchTerm, setSearchTerm] = useState("");
  const [submitTerm, setSubmitTerm] = useState("");
  const handleClick = () => {
    setSubmitTerm(searchTerm);
  };

  useEffect(() => {
    fetch(`api/listing/${submitTerm ? `?q=${submitTerm}` : ""}`)
      .then((d) => d.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setData, submitTerm]);

  console.log(data);

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
