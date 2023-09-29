import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useStateProvider } from "@/context/StateContext";
import Input from "../components/common/Input";
import Avatar from "../components/common/Avatar";
import { useRouter } from "next/router";
import axios from "axios";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";

function onboarding() {
  const [{ userInfo, newUser }, dispatch] = useStateProvider();
  console.log(userInfo);
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");
  const router = useRouter();

  // useEffect(() => {
  //   if (!newUser && !userInfo?.email) router.push("/login");
  //   else if (!newUser && userInfo?.email) router.push("/");
  // }, [newUser, userInfo, router]);

  const onboardUserHandler = async () => {
    if (validateDetails()) {
      const email = userInfo.email;
      try {
        let userData = { email, name, about, image };
        const { data } = await axios.post(ONBOARD_USER_ROUTE, userData);
        if (data.status) {
          dispatch({ type: reducercases.SET_NEW_USER, newUser: flase });
          dispatch({
            type: reducercases.SET_USER_INFO,
            userInfo: {
              id: data.user.id,
              name,
              email,
              profileImage: image,
              status: about,
            },
          });
          router.push("/");
        }
      } catch (e) {
        console.log("==error==", e);
      }
    }
  };

  const validateDetails = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };
  return (
    <div className="bg-panel-header-background h-screen w-screen text-primary-strong flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-2">
        <Image src="/whatsapp.gif" alt="whatsapp" height="300" width="300" />
        <span className="text-7xl">whatsapp</span>
      </div>
      <h2 className=" text-2xl">Create your profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-centermt-5 gap-6">
          <Input
            name="Display Name"
            state={name}
            setState={setName}
            label="true"
          />
          <Input name="About" state={about} setState={setAbout} label="true" />
          <div className="flex items-center justify-center">
            <button
              onClick={onboardUserHandler}
              className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
            >
              create profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type="xl" image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
