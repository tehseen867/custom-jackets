"use client"
import { useState, ChangeEvent } from "react";
import { IoSend } from "react-icons/io5";

interface Message {
  user: "User" | "Admin";
  text: string;
}

const ChatBoard: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  const toggleChat = (): void => setIsOpen(!isOpen);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNewMessage(e.target.value);
  };

  const sendMessage = (): void => {
    if (newMessage.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { user: "User", text: newMessage },
    ]);
    setNewMessage("");

    // Simulate admin response (replace with real server logic)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "Admin", text: "Thank you for your message!" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 z-50 right-5 ">
      {/* Toggle Button */}
      <button
        onClick={toggleChat}
        className={`${isOpen? "bg-none":"bg-blue-500"} text-white px-4 py-2 rounded-full shadow-lg`}
      >
        {isOpen ?"" : "Chat with us"}
      </button>

      {/* Chat Board */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col mt-3">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h2 className="text-lg font-bold">Chat with Admin</h2>
            <button onClick={toggleChat} className="font-bold text-lg">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${
                  msg.user === "User" ? "text-right" : "text-left"
                }`}
              >
                <p
                  className={`inline-block px-4 py-2 rounded-lg ${
                    msg.user === "User"
                      ? "bg-blue-100 text-blue-900"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 flex items-center border-t">
            <input
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 mr-2 focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <IoSend />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBoard;
