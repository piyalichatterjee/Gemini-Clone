import { CgProfile } from "react-icons/cg";
import { TbCompass } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import { RiCodeSSlashLine } from "react-icons/ri";
import { GrGallery } from "react-icons/gr";
import { IoMdMic } from "react-icons/io";
import { MdSend } from "react-icons/md";
import { Dispatch, SetStateAction } from "react";
import { SiGooglegemini } from "react-icons/si";
interface dataProps {
  input: string;
  recentPrompt: string;
  loading: boolean;
  showResult: boolean;
  resultData: string;
  onSent: (prompt: string, recent: boolean) => Promise<void>;
  setInput: Dispatch<SetStateAction<string>>;
}
function Main({
  input,
  recentPrompt,
  loading,
  showResult,
  resultData,
  onSent,
  setInput,
}: dataProps) {
  return (
    <div className="flex-1">
      <div className="flex justify-between items-center px-5 mt-4 w-full">
        <h1 className="text-2xl text-stone-600">Gemini</h1>
        <CgProfile className="text-4xl" />
      </div>
      <div className="md:w-[65%] m-auto p-5 font-medium h-[95%] flex flex-col justify-between">
        {!showResult ? (
          <>
            <div className="mt-20 text-6xl">
              <p className="bg-linear-to-bl from-blue-800 to-red-400 text-transparent bg-clip-text">
                Hello,Dev.
              </p>
              <p className="text-gray-300 mt-3">How can I Help you today?</p>
            </div>
            <div className="mt-28 gap-8 text-gray-600 flex flex-col md:flex-row">
              <div className="md:w-70 h-50 flex flex-col justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer relative">
                <p>Briefly summarize this concept:urban planning</p>
                <TbCompass className="text-5xl rounded-full bg-white p-2 absolute bottom-2 right-4" />
              </div>
              <div className="md:w-70 h-50 flex flex-col justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer relative">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <FaRegLightbulb className="text-5xl rounded-full bg-white p-2 absolute bottom-2 right-4" />
              </div>
              <div className="md:w-70 h-50 flex flex-col relative justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer">
                <p>Improve the readabiliy of the following code</p>

                <SiGooglemessages className="text-5xl rounded-full bg-white p-2 absolute bottom-2 right-4" />
              </div>
              <div className="md:w-70 h-50 flex flex-col justify-between bg-sky-50 p-4 rounded-2xl hover:bg-stone-200 duration-150 ease-in-out cursor-pointer relative">
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <RiCodeSSlashLine className="text-5xl rounded-full bg-white p-2 absolute bottom-2 right-4" />
              </div>
            </div>
          </>
        ) : (
          <div className="h-screen">
            <div className="flex items-center gap-5">
              <CgProfile className="text-4xl" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex gap-10 mt-20">
              <div className="text-blue-700">
                <SiGooglegemini className="text-3xl" />
                <SiGooglegemini className="ml-4" />
              </div>
              {loading ? (
                <div className="w-full flex flex-col gap-3">
                  <hr className="rounded-sm border-none  bg-sky-200 h-4 animate-pulse"></hr>
                  <hr className="rounded-sm border-none bg-sky-200 h-4 animate-pulse"></hr>
                  <hr className="rounded-sm border-none bg-sky-200 h-4 animate-pulse"></hr>
                </div>
              ) : (
                <>
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="text-lg/8 font-normal h-96 overflow-auto"
                  ></p>
                </>
              )}
            </div>
          </div>
        )}
        <div>
          <div className="flex justify-between items-center rounded-4xl bg-sky-50 p-4 mt-12 text-gray-600">
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Enter a prompt here"
              className="flex-1 outline-0 pl-5"
            />
            <div className="flex gap-5">
              <GrGallery className="cursor-pointer" />
              <IoMdMic className="cursor-pointer" />
              {input && (
                <MdSend
                  className="cursor-pointer"
                  onClick={async () => await onSent(input, false)}
                />
              )}
            </div>
          </div>
          <p className="text-xs font-light text-center mt-4">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
