import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Dispatch, SetStateAction, useState } from "react";
interface SidebarProps {
  prevPrompts: string[];
  setRecentPrompt: Dispatch<SetStateAction<string>>;
  onSent: (prompt: string, recent: boolean) => Promise<void>;
  newChat: () => void;
}

function Sidebar({
  prevPrompts,
  setRecentPrompt,
  onSent,
  newChat,
}: SidebarProps) {
  let [extended, setExtended] = useState<boolean>(false);
  let loadPrompt = async (prompt: string) => {
    setRecentPrompt(prompt);
    await onSent(prompt, true);
  };
  return (
    <div className="bg-sky-50 max-w-max h-screen py-10 md:flex flex-col justify-between text-gray-800 px-5 hidden">
      <div>
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={() => setExtended((prev: boolean) => !prev)}
        />
        <div
          className="flex gap-2 mt-10 py-2 px-4 bg-gray-300 rounded-4xl cursor-pointer max-w-max items-center"
          onClick={newChat}
        >
          <FaPlus />
          {extended ? <h1 className="font-medium">New Chat</h1> : null}
        </div>
        {extended && (
          <div className="mt-10">
            <h1 className="font-bold text-xl">Recent</h1>
            {prevPrompts.map((item, i) => {
              return (
                <div
                  className="flex items-center gap-4 px-4 hover:rounded-4xl hover:bg-gray-300 cursor-pointer py-2 duration-200 ease-in-out"
                  key={i}
                  onClick={() => loadPrompt(item)}
                >
                  <FaRegMessage />
                  <h1 className="font-medium">{item.slice(0, 15)}...</h1>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div>
        <div className="flex items-center px-4 gap-4 font-medium hover:rounded-4xl hover:bg-gray-300 cursor-pointer py-2 duration-200 ease-in-out">
          <FaRegQuestionCircle className="text-2xl" />
          {extended ? <h1>Help</h1> : null}
        </div>
        <div className="flex items-center px-4 gap-4 my-4 font-medium hover:rounded-4xl hover:bg-gray-300 cursor-pointer py-2 duration-200 ease-in-out">
          <FaHistory className="text-2xl" />
          {extended ? <h1>Activity</h1> : null}
        </div>
        <div className="flex items-center px-4 gap-4 font-medium hover:rounded-4xl hover:bg-gray-300 cursor-pointer py-2 duration-200 ease-in-out">
          <IoSettings className="text-2xl" />
          {extended ? <h1>Settings</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
