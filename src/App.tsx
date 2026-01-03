import { useEffect, useState } from "react";
import Main from "./Components/Main";
import Sidebar from "./Components/Sidebar";
import { main } from "./config/gemini";

function App() {
  let [input, setInput] = useState<string>("");
  let [recentPrompt, setRecentPrompt] = useState<string>("");
  let [prevPrompts, setPrevPrompts] = useState<string[]>([]);
  let [loading, setLoading] = useState<boolean>(false);
  let [showResult, setShowResult] = useState<boolean>(false);
  let [resultData, setResultData] = useState<string>("");
  let delayPara = (i: number, nextWord: string) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * i);
  };
  let newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  let onSent = async (prompt: string, recent: boolean) => {
    setResultData("");
    setRecentPrompt("");
    setLoading(true);
    setShowResult(true);
    let data = await main(prompt);
    setRecentPrompt(prompt);
    if (!recent) {
      setPrevPrompts((prev) => [...prev, prompt]);
    }

    let responseArray: string[] = data.split("**");
    let newResponse: string = "";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    let newResponseArray = newResponse2.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      delayPara(i, newResponseArray[i] + " ");
    }

    setLoading(false);
    setInput("");
  };
  return (
    <div className="h-screen font-display flex">
      <Sidebar
        prevPrompts={prevPrompts}
        setRecentPrompt={setRecentPrompt}
        onSent={onSent}
        newChat={newChat}
      />
      <Main
        input={input}
        recentPrompt={recentPrompt}
        loading={loading}
        showResult={showResult}
        resultData={resultData}
        onSent={onSent}
        setInput={setInput}
      />
    </div>
  );
}
export default App;
