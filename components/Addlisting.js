import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
const Addlisting = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data, parseInt(data.bednum));
    fetch("api/create_listing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        photo: data.photo,
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
      })
      .catch(async (err) => {
        console.error(err);
      });
  };
  return (
    <div className="grid justify-center ">
      <div>
        <button className="justify-cente">
          <label>
            <BiImageAdd size={100} />
          </label>
        </button>
      </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Listing Title</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
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

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Price</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
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
