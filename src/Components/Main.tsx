import { CgProfile } from "react-icons/cg";
import { TbCompass } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { RiCodeSSlashLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoMdMic } from "react-icons/io";
import { MdSend } from "react-icons/md";
function Main() {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center px-5 mt-4">
        <h1 className="text-2xl text-stone-600">Gemini</h1>
        <CgProfile className="text-4xl" />
      </div>
      <div className="w-[65%] m-auto p-5 font-medium">
        <div className="mt-20 text-6xl">
          <p className="bg-linear-to-bl from-blue-800 to-red-400 text-transparent bg-clip-text">
            Hello,Dev.
          </p>
          <p className="text-gray-300 mt-3">How can I Help you today?</p>
        </div>
        <div className="flex mt-26 gap-8 text-gray-600">
          <div className="w-70 h-50 flex flex-col items-end justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer">
            <p>Briefly summarize this concept:urban planning</p>
            <TbCompass className="text-5xl rounded-full bg-white p-2" />
          </div>
          <div className="w-70 h-50 flex flex-col items-end justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer">
            <p>Brainstorm team bonding activities for our work retreat</p>
            <FaRegLightbulb className="text-5xl rounded-full bg-white p-2" />
          </div>
          <div className="w-70 h-50 flex flex-col items-end justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer">
            <p>Improve the readabiliy of the following code</p>

            <SiGooglemessages className="text-5xl rounded-full bg-white p-2" />
          </div>
          <div className="w-70 h-50 flex flex-col items-end justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer">
            <p>Suggest beautiful places to see on an upcoming road trip</p>
            <RiCodeSSlashLine className="text-5xl rounded-full bg-white p-2" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center rounded-4xl bg-sky-50 p-4 mt-5 text-gray-600">
            <input
              type="text"
              placeholder="Enter a prompt here"
              className="flex-1 outline-0 pl-5 "
            />
            <div className="flex gap-5">
              <GrGallery className="cursor-pointer" />
              <IoMdMic className="cursor-pointer" />
              <MdSend className="cursor-pointer" />
            </div>
          </div>
          <p className="text-xs font-light text-center mt-2">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
