import React from "react";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { reducercases } from "@/context/constants";

function login() {
  const router = useRouter();
  const [{}, dispatch] = useStateProvider();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        if (!data.status) {
          console.log(data);
          dispatch({ type: reducercases.SET_NEW_USER, newUser: true });
          dispatch({
            type: reducercases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profileImage,
              status: "",
            },
          });
          router.push("/onboarding");
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex items-center justify-center gap-2 text-primary-strong">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">whatsapp</span>
      </div>
      <button
        className="flex items-center justify-center gap-7 bg-search-input-container-background p-5 rounded-lg"
        onClick={handleLogin}
      >
        <FaGoogle className="text-4xl bg" />
        <span className="text-primary-strong text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default login;
