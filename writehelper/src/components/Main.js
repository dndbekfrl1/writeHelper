import react from "react";
import { useState, useRef, useEffect } from "react";
import TextBox from "./TextBox";
import Header from "./Header";
import styled, { css } from "styled-components";

let to = 5;
let cur = 0;
let timerId;

//TODO 키보드 입력도

function Main() {
  const [open, setOpen] = useState(false); // dialog open
  const [text, setText] = useState(null); // textarea text
  const [count, setCount] = useState(0); //count text
  const [alertDegree, setAlertDegree] = useState(0); // alert backgrond color change
  const textarea = useRef(); // textarea

  useEffect(() => {
    const setTimer = () => {
      //timer initial
      if (typeof timerId === "number") {
        // console.log("new input", "curID:", timerId);
        cur = 0;
        clearTimeout(timerId);
        timerId = undefined;
        setAlertDegree(cur);
      }
      timerId = setTimeout(function tick() {
        // if file is being saving, pause timer
        if (open) {
          cur = 0;
        }

        if (cur < to) {
          if (typeof timerId === "number") {
            // console.log(timerId, cur, to);
            setAlertDegree(cur * 20);
            timerId = setTimeout(tick, 1000);
          }
        }
        cur += 1;

        if (cur === to) {
          // console.log(timerId, "time out");
          textarea.current.value = "";
          setCount(0);
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
    <div className="main">
      <div className="wrapper">
        <Header text={text} open={open} setOpen={setOpen} />
        <TextBox
          text={text}
          setText={setText}
          textarea={textarea}
          count={count}
          setCount={setCount}
        />
      </div>
      <AlertBlockLeft alertDegree={alertDegree} />
      <AlertBlockRight alertDegree={alertDegree} />
    </div>
  );
}

const AlertBlockLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 20%;
  left: 0;

  background: ${(props) =>
    props.alertDegree
      ? css`linear-gradient(
    90deg,
    rgba(109, 127, 141, 0.9) 0%,
    rgba(0, 0, 0, 0) ${props.alertDegree}%
  )`
      : css``};
`;

const AlertBlockRight = styled.div`
  position: absolute;
  height: 100%;
  width: 20%;
  right: 0;

  background: ${(props) =>
    props.alertDegree
      ? css`linear-gradient(
    -90deg,
    rgba(22, 255, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) ${props.alertDegree}%
  )`
      : css``};
`;

export default Main;
