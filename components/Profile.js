import { useState, useEffect } from "react";

const Profile = () => {
  const [profile, updateProfile] = useState(null);
  useEffect((data) => {
    console.log(data);
    fetch("/api/user_profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(),
    })
      .then(async (response) => {
        let resData = await response.json();
        updateProfile(resData);
        console.log(resData);
      })
      .catch(async (err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="grid  mb-20">
      <div class="avatar grid justify-left px-60 ">
        <div class="w-24 mask mask-hexagon">
          <img src="https://api.lorem.space/image/face?hash=55350" />
        </div>
      </div>
      <div className="grid space-y-10">
        <div className="flex justify-center">
          <label className=" flex px-24 input input-bordered input-success w-full max-w-xs justify-center">
            {profile?.username}
          </label>
        </div>
        <div className="flex justify-center">
          <label className=" flex px-24 input input-bordered input-success w-full max-w-xs justify-center">
            {profile?.email}
          </label>
        </div>
      </div>
    </div>
  );
};
export default Profile;
