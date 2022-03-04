const Filter = () => {
    return ( 
        <div class="lg:flex lg:space-x-10 lg:justify-center overscroll-auto hover:overscroll-contain">
            <div class="flex mb-3 space-x-5 justify-center flex-wrap ">              
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">State</span>
                    </label>
                    <select class="select select-bordered select-md w-24 ">
                        <option disabled selected>Any</option>
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
                        <option>Tunis</option>
                        <option>Zaghouan</option>
                        <option>Medenine</option>
                        <option>Manouba</option>
                        <option>Tataouine</option>

                    </select>
                </div>   
                <div class="form-control  max-w-xs">
                    <label class="label">
                        <span class="label-text">City</span>
                    </label>
                    <select class="select select-bordered select-md w-24 ">
                        <option disabled selected>Any</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>
                </div>  
                <div class=" flex mb-3 space-x-5 pr-5 justify-start flex-wrap">
                    <div class="form-control  max-w-xs">
                        <label class="label">
                            <span class="label-text">Category</span>
                        </label>
                        <select class="select select-bordered select-md w-24 ">
                            <option disabled selected>Any</option>
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
                        <label class="label">
                        <span class="label-text">Bedrooms</span>
                        </label>
                        <input type="number" class="input input-bordered w-24 "></input>
                    </div>
                </div>  
            </div>
            <div class=" flex mb-11 space-x-5 justify-center lg:py-12 flex-wrap">
                <label >
                <span class="label-text">Residential</span>
                </label>
                <input type="checkbox" class="toggle toggle-base"/>
                                <label >
                <span class="label-text">Professional</span>
                </label>
                <input type="checkbox" class="toggle toggle-base"/>
            </div>
        </div> 
       
        );
}
 
export default Filter;