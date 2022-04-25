import { useState, useEffect } from "react"
import {BsHeart} from 'react-icons/bs'
import {FaBed} from 'react-icons/fa'
import {FaBath} from 'react-icons/fa'
import {MdPhotoSizeSelectSmall} from 'react-icons/md'
const Product = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('api/listing')
          .then((res) => res.json())
          .then((data) => {
            setData(data)
            setLoading(false)
          })
      }, [])
   
        if (isLoading) return <p>Loading...</p>
        if (!data) return <p>No profile data</p>    
    return ( 
        <div class="flex flex-wrap justify-center">
                {data.map((item) => (
                            <div key={item.id}>
                                <div class=" flex gap-10 md:flex px-10 md:py-10 ">
                                    <div class=" card w-96 bg-base-100 shadow-xl w-30">
                                        <figure class="flex flex-wrap"><a>{item.photo}</a><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes"/></figure>
                                        <div class=" card-body ">
                                            <h1 class="card-title">{item.title}</h1>
                                            <h2>{item.location}</h2>
                                            <div class="flex gap-5  ">
                                                <label><FaBed size="25"/></label>
                                                <label>{item.bednum}</label>
                                                <label><FaBath size="20"/></label>
                                                <label>{item.bathnum}</label>
                                                <label><MdPhotoSizeSelectSmall size="20"/></label>
                                                <label>{item.surfacesize}</label>
                                            </div>
                                                <div class="justify-end card-actions">
                                                    <p>{item.price}</p>
                                                    <button ><label class="bg-base-600 hover:bg-base-700"><BsHeart size={20}/></label></button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
        </div>
     );
}
 
export default Product


