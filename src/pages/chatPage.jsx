import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/OtherNav";
import DoctorConnect from "../components/Chat";

const ChatPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar />
      <DoctorConnect />
    </>
  );
};

export default ChatPage;
