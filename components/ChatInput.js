import { useState } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  const handleEnter=(e)=>{
    if(e.key==='Enter')
    {
      handleSend()
    }
  }

  return (

<div className="flex w-[50%] bg-gray-300 h-16 rounded-full ml-[15%]">
      <input
        type="text"
        className="flex h-16 w-[80%] bg-gray-300 ml-[10%] border-none focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Type your message..."

      />
       
      <button
       className=" bg-slate-800 text-gray-300 h-16 w-16 rounded-full ml-2"
        onClick={handleSend} >
        Send
      </button>
          </div>

  );
}
