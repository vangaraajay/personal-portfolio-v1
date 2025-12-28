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
       }

       setDisplayText(fullText.slice(0, i + 1));
       await sleep(100);
       }


       if (!cancelled) {
        const splash = document.querySelector(".splash-screen");
        splash.classList.add("translate-x-[-100%]");
        await sleep(1500);

        setFinished(true);
        if (onFinish) onFinish();
       }
   };


   run();


   return () => {
       cancelled = true;
   };
   }, [fullText]);


const handleSkip = async () => {
    // stop the loop immediately
    setDisplayText(fullText);
    const splash = document.querySelector(".splash-screen");
    splash.classList.add("translate-x-[-100%]");
    await sleep(1500);

    setFinished(true);
    if (onFinish) onFinish();
};




 // Conditionally render splash
 if (finished) return null;


 return (
   <div className="fixed inset-0 bg-black text-white z-[9999] flex items-center justify-center transition-transform duration-1500 splash-screen">
     <h1 className="navbar-font text-4xl md:text-6xl whitespace-pre">{displayText}|</h1>


     <button
       onClick={handleSkip}
       className="navbar-font fixed bottom-6 right-6 px-4 py-2 bg-white text-black rounded border border-black transform transition duration-150 ease-out hover:scale-105 hover:shadow-lg"
     >
       Skip →
     </button>
   </div>
 );
};


export default SplashScreen;