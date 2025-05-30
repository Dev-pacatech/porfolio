import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-slate-950 to-stone-950 text-purple-300 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold ">
        {text} <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[205px] h-[2px] bg-gray rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-purple-600 shadow[0_0_15px_#3682f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
