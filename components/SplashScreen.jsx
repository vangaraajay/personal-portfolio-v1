import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
    const fullText = "My name is Ajay Vangara;";
    const [displayText, setDisplayText] = useState("");
    const [finished, setFinished] = useState(false);

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    useEffect(() => {
    let cancelled = false;

    const run = async () => {
        for (let i = 0; i < fullText.length; i++) {
        if (cancelled) return;
        
        if (i === 4) {
            setDisplayText("My nm");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My n");
            await sleep(100);
            if (cancelled) return;
        }
        if (i === 8) {
            setDisplayText("My name s");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My name ");
            await sleep(100);
            if (cancelled) return;
        }
        if (i === 13) {
            setDisplayText("My name is Ajy");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My name is Aj");
            await sleep(100);
            if (cancelled) return;
        }
        if (i === 14) {
            setDisplayText("My name is Ajau");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My name is Aja");
            await sleep(100);
            if (cancelled) return;

            setDisplayText("My name is Ajat");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My name is Aja");
            await sleep(100);
            if (cancelled) return;
        }
        if(i === 17){
            setDisplayText("My name is Ajay Vn");
            await sleep(300);
            if (cancelled) return;

            setDisplayText("My name is Ajay V");
            await sleep(100);
            if (cancelled) return;
        }
        if(i === 18){
            setDisplayText("My name is Ajay Vam");
            await sleep(300);
            if (cancelled) return;

              // backspace to empty
            for (let j = displayText.length; j >= 0; j--) {
                setDisplayText(displayText.slice(0, j));
                await sleep(50);
                if (cancelled) return;
            }

            // type "Ughhhhh..."
            const sigh = "Ughhhhh...";
            for (let k = 0; k <= sigh.length; k++) {
                setDisplayText(sigh.slice(0, k));
                await sleep(100);
                if (cancelled) return;
            }

            await sleep(500);

            // type full correct text
            for (let m = 0; m <= 18; m++) {
                setDisplayText(fullText.slice(0, m));
                await sleep(80);
                if (cancelled) return;
            }

            //Add code here that backspaced to empty then types Ughhhhh... then types the full text
        }


        setDisplayText(fullText.slice(0, i + 1));
        await sleep(100);
        }

        if (!cancelled) {
        setFinished(true);
        if (onFinish) onFinish();
        }
    };

    run();

    return () => {
        cancelled = true;
    };
    }, [fullText]);

const handleSkip = () => {
  // stop the loop immediately
  setDisplayText(fullText);
  setFinished(true);
  if (onFinish) onFinish();
};


  // Conditionally render splash
  if (finished) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontFamily: "monospace",
        zIndex: 9999
      }}
    >
      <h1 style={{ fontSize: "3rem", whiteSpace: "pre" }}>{displayText}|</h1>
      <button
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          fontSize: "1rem",
          cursor: "pointer",
          borderRadius: "5px",
          background: "#4f46e5",
          color: "white",
          border: "none"
        }}
        onClick={handleSkip}
      >
        Skip
      </button>
    </div>
  );
};

export default SplashScreen;

