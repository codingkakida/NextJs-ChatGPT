"use client"
import { useState,useEffect } from "react";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import HistoryNav from "@/components/HistoryNav";
import Models from "@/components/Models";
import UserMenu from "@/components/UserMenu";


export default function Home() {
  const [messages, setMessages] = useState([
    { message: "Hello! How can I help you today?", isUser: false },
  ]);

  const handleSend = (newMessage) => {
    setMessages([...messages, { message: newMessage, isUser: true }]);
    setTimeout(() => {
      setMessages([...messages, { message: newMessage, isUser: true }, { message: "Let me think...", isUser: false }]);
    }, 1000);
  };

  return (
   
   <div className="flex h-screen bg-slate-900">
      {/* Side Bar (20% width) */}
      <div className="overflow-y-none flex-grow bg-slate-800 w-1/5 p-3 text-white">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row w-full">
        <div className="flex-col w-[50%] text-xl font-semibold justify-start">GPT</div>
          <div className="flex-col w-[50%] text-gray-400 hover:text-white justify-end float-end underline">New Chat</div>
        </div>
        
     <HistoryNav /> 
         
          </div>
      </div>
      {/* Main Content Area (80% width) */}
      <div className="flex-grow w-4/5 bg-slate-700">
        {/* Top Nav Bar (fixed) */}
      <div className="fixed top-0 h-16 w-full bg-slate-900 p-3 text-white flex items-center justify-between">
      
      <Models />
      <UserMenu />

    </div>


        {/* Conversation Area (with padding) */}
        <div className="flex-grow pb-16 mx-36 mt-20">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.message} isUser={msg.isUser} />
         ))}
          </div>

        {/* Bottom Bar (fixed) */}
        <div className="fixed bottom-0 w-full h-16  justify-center mb-5">
        <ChatInput onSend={handleSend} />
        
        </div>
      </div>
    </div>

  );
}
