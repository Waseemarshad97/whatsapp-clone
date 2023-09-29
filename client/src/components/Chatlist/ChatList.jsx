import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateProvider } from "@/context/StateContext";
import ContactsList from "./ContactsList";

function ChatList() {
  const [{ contactsPage }] = useStateProvider();
  const [pageType, setPagetype] = useState("default");

  useEffect(() => {
    if (contactsPage) {
      setPagetype("all-contacts");
    } else {
      setPagetype("default");
    }
  }, [contactsPage]);

  return (
    <div className="bg-panel-header-background flex flex-col max-h-screen z-20 ">
      {pageType === "default" && (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}
      {pageType === "all-contacts" && <ContactsList />}
    </div>
  );
}

export default ChatList;
