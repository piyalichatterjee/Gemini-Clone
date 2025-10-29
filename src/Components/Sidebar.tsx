import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";

import { FaRegQuestionCircle } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";

import { IoSettings } from "react-icons/io5";
import { useState } from "react";

function Sidebar() {
  let [extended, setExtended] = useState<boolean>(false);
  return (
    <div className="bg-sky-50 max-w-max h-screen py-10 flex flex-col justify-between text-gray-800 px-5 border-2 border-white">
      <div className="">
        <GiHamburgerMenu
          className="text-2xl cursor-pointer"
          onClick={() => setExtended((prev: boolean) => !prev)}
        />
        <div className="flex gap-2 mt-10 py-2 px-4 bg-gray-300 rounded-4xl cursor-pointer max-w-max items-center">
          <FaPlus />
          {extended ? <h1 className="font-medium">New Chat</h1> : null}
        </div>
        {extended ? (
          <div className="mt-10">
            <h1 className="font-bold text-xl">Recent</h1>
            <div className="flex items-center gap-4 mt-6 px-4 hover:rounded-4xl hover:bg-gray-300 cursor-pointer py-2 duration-200 ease-in-out">
              <FaRegMessage />
              <h1 className="font-medium">What is react....</h1>
            </div>
          </div>
        ) : null}
      </div>
      <div className="">
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
