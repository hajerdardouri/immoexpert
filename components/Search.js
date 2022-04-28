import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { searchListing } from "./store";
const Search = () => {
    const [data, setData] = useAtom(searchListing);
    const [searchTerm, setSearchTerm] = useState('')
    const [submitTerm, setSubmitTerm] = useState('')
    const handleClick = () => {
        setSubmitTerm(searchTerm)
    }

    useEffect(() => {
        fetch(`api/listing/${submitTerm ? `?q=${submitTerm}` : '' }`)
        .then((d) => d.json())
        .then(res => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }, [submitTerm])

    console.log(data);

    return (  
        <div class="flex">        
            <div class="form-control px-10 mb-10 md:px-40 md:mb-10">
                <input type="text" placeholder="Search" class="input input-bordered" onChange={event =>{setSearchTerm(event.target.value)}}/>
            </div>
            <div>
                <button class="btn btn-outline  btn-sm modal-button" onClick={handleClick}>Search</button>
            </div>
        </div>
    );
}
export default Search;
