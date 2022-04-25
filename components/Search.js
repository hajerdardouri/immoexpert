import { useEffect, useState } from "react";
const Search = () => {
    const [data, setData] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [submitTerm, setSubmitTerm] = useState('')
    const handleClick = () => {
        setSubmitTerm(searchTerm)
    }

    useEffect(() => {
        fetch(`/api/search/?q=${submitTerm}`)
        .then(res => {
            console.log(res)
            setData(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }, [submitTerm])
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
