import React, { useEffect, useState } from "react";
import Empty from "./Empty";
import ChatList from "./Chatlist/ChatList";
import Chat from "./Chat/Chat";
import { onAuthStateChanged } from "firebase/auth";
import { useStateProvider } from "@/context/StateContext";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { reducercases } from "@/context/constants";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";

function Main() {
  const [{ userInfo, currentChatUser }, dispatch] = useStateProvider();
  const Router = useRouter();
  const [redirectLogin, setRedirectLogin] = useState(false);

  useEffect(() => {
    if (redirectLogin) Router.push("/login");
  }, [redirectLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectLogin(true);
    if (!userInfo && currentUser?.email) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser?.email,
      });

      if (!data.status) {
        Router.push("/login");
      }
      if (data?.data) {
        const {
          id,
          name,
          email,
          profilePicture: profileImage,
          status,
        } = data.data;
        dispatch({
          type: reducercases.SET_USER_INFO,
          userInfo: { id, name, email, profileImage, status },
        });
      }
    }
  });

  return (
    <div className="grid grid-cols-main h-screen w-screen max-h-screen max-w-fill overflow-hidden">
      <ChatList />
      {currentChatUser ? <Chat /> : <Empty />}
    </div>
  );
}

export default Main;
