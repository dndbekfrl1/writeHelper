import react from "react";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TextBox from "./TextBox";
import ThemeChange from "./ThemeChange";
import Header from "./Header";

let to = 4;
let cur = 0;
let timerId;
let alertDegree = 10;

function Main() {
  const [text, setText] = useState(null);
  const textarea = useRef();
  const flag = false;

  useEffect(() => {
    const setTimer = () => {
      if (typeof timerId === "number") {
        console.log("new input", "curID:", timerId);
        cur = 0;
        clearTimeout(timerId);
        timerId = undefined;
        alertDegree = 0;
        // Appdiv.current.style.backgroundColor = "white";
      }
      timerId = setTimeout(function tick() {
        if (cur < to) {
          if (typeof timerId === "number") {
            console.log(timerId, cur, to);
            // Appdiv.current.style.backgroundColor = `rgb(253, 184, 39,${alertDegree})`;
            alertDegree *= 2;
            if (flag) {
              timerId = setTimeout(tick, 1000);
            }
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
  }, [text]);

  return (
    <div className="wrapper">
      <Header text={text} />
      <TextBox text={text} setText={setText} textarea={textarea} />
    </div>
  );
}

export default Main;
