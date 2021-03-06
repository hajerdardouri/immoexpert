import { useRouter } from 'next/router';
import {useState} from 'react';
import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";

const Addlisting = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const router = useRouter();
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data, parseInt(data.bednum));

    const body = new FormData();
    body.append("file", image);

    let res = await fetch("api/upload", {
      "method": "POST",
      body
    });

    let resBody = await res.json();

    await fetch("api/create_listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        photo: resBody.files[0].link,
        title: data.title,
        location: data.location,
        bednum: parseInt(data.bednum),
        bathnum: parseInt(data.bathnum),
        surfacesize: parseInt(data.surfacesize),
        price: parseInt(data.price),
      }),
    })
      .then(async (response) => {
        console.log(response);
        router.push("/");
      })
      .catch(async (err) => {
        console.error(err);
      });
      
  };
  
  return (
    <div className="grid justify-center ">
      <div>
        <img src={createObjectURL} className="max-w-[100px]" />
        <input type="file" name="myImage" onChange={uploadToClient} />
      </div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Listing Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          {...register("title")}
          onTextChange={(value) => setValue("lastChange", value)}
        />
      </div>
      <div className="form-control  max-w-xs">
        <label className="label">
          <span className="label-text">Location</span>
        </label>
        <select
          className="select select-bordered select-md  "
          {...register("location")}
          onTextChange={(value) => setValue("lastChange", value)}
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
      <div className="flex mb-3 space-x-5 justify-center flex-wrap">
        <div>
          <label className="label">
            <span className="label-text">Bedroom</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-24 "
            {...register("bednum")}
            onTextChange={(value) => setValue("lastChange", value)}
          ></input>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Bathrom</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-24 "
            {...register("bathnum")}
            onTextChange={(value) => setValue("lastChange", value)}
          ></input>
        </div>
        <div>
          <label className="label">
            <span className="label-text">surface size</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-24 "
            {...register("surfacesize")}
            onTextChange={(value) => setValue("lastChange", value)}
          ></input>
        </div>
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          {...register("price")}
          onTextChange={(value) => setValue("lastChange", value)}
        />
      </div>

      <div className="form-control mt-6 modal-action">
        <button className="" type="submit" onClick={handleSubmit(onSubmit)}>
          <label htmlFor="my-modal" className="btn btn-base">
            Submit
          </label>
        </button>
      </div>
    </div>
  );
};
export default Addlisting;
