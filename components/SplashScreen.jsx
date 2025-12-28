import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const fullText = "Ajay Vangara";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(onFinish, 1000); // auto-finish after 1s
      }
    }, 150);

    return () => clearInterval(interval);
  }, [fullText, onFinish]);

  const handleSkip = () => {
    setDisplayText(fullText);
    setTimeout(onFinish, 200); // finish almost immediately
  };

  return (
    <div className="splash-screen">
      <h1 className="splash-text">{displayText}|</h1>
      <button className="skip-button" onClick={handleSkip}>
        Skip
      </button>
    </div>
  );
};

export default SplashScreen;
