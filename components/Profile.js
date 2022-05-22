import { useState, useEffect } from "react";

const Profile = () => {
  const [profile, updateProfile] = useState(null);
  useEffect((data) => {
    console.log(data);
    fetch("api/user_profile", {
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
    <div className="grid  ">
      <div class="avatar grid justify-left px-60 ">
        <div class="w-24 mask mask-hexagon">
          <img src="https://api.lorem.space/image/face?hash=55350" />
        </div>
        <div>
          <label className="px-2">Username:{profile?.username}</label>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Profile;
