import React from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar"
import EmptyChat from "../components/EmptyChat"
import ChatContainer from "../components/ChatContainer"

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-base-200">
      <div className="flex items-center justify-center pt-16 sm:pt-20 sm:px-4">
        <div className="bg-base-100 rounded-lg shadow-xl w-full max-w-7xl h-[calc(100vh-4rem)] sm:h-[calc(100vh-7rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">

          <Sidebar />

          {!selectedUser ? <EmptyChat /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
