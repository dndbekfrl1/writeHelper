import react from "react";
import { useState, useRef, useEffect } from "react";
import TextBox from "./TextBox";
import Header from "./Header";

let to = 4;
let cur = 0;
let timerId;
let alertDegree = 10;

function Main() {
  const [open, setOpen] = useState(false); // dialog open
  const [text, setText] = useState(null); // textarea text
  const textarea = useRef(); // textarea

  useEffect(() => {
    const setTimer = () => {
      //timer initial
      if (typeof timerId === "number") {
        console.log("new input", "curID:", timerId);
        cur = 0;
        clearTimeout(timerId);
        timerId = undefined;
        alertDegree = 0;
        // Appdiv.current.style.backgroundColor = "white";
      }
      timerId = setTimeout(function tick() {
        // if file is being saving, pause timer
        if (open) {
          cur = 0;
        }

        if (cur < to) {
          if (typeof timerId === "number") {
            console.log(timerId, cur, to);
            // Appdiv.current.style.backgroundColor = `rgb(253, 184, 39,${alertDegree})`;
            alertDegree *= 2;
            timerId = setTimeout(tick, 1000);
          }
        }
        cur += 1;
        if (cur === to) {
          console.log(timerId, "time out");
          textarea.current.value = "";
          alertDegree = 0;
          // Appdiv.current.style.backgroundColor = "";
        }
      }, 1000);
    };

    const timer = setTimeout(() => {
      setTimer();
    });

    return () => {
      clearTimeout(timer);
    };
  }, [text, open]);

  return (
    <div className="wrapper">
      <Header text={text} open={open} setOpen={setOpen} />
      <TextBox text={text} setText={setText} textarea={textarea} />
    </div>
  );
}

export default Main;
