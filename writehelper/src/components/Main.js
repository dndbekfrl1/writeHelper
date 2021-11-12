import react from "react";
import { useState, useRef, useEffect, useContext } from "react";
import { ThemeContext, AlertContext } from "../theme";
import TextBox from "./TextBox";
import Header from "./Header";
import styled, { css } from "styled-components";

let to = 31;
let cur = 0;
let timerId;

//TODO 키보드 입력도

function Main() {
  const { theme } = useContext(ThemeContext);

  const { isAlert, setIsAlert } = useContext(AlertContext);

  const [open, setOpen] = useState(false); // dialog open
  const [text, setText] = useState(null); // textarea text
  const [count, setCount] = useState(0); // text count
  const [curSec, setCurSec] = useState(0);
  const [alertDegree, setAlertDegree] = useState(0); // alert backgrond color change
  const textarea = useRef(); // textarea

  useEffect(() => {
    const setTimer = () => {
      if (typeof timerId === "number") {
        //timer initial
        cur = 0;
        setCurSec(0);
        clearTimeout(timerId);
        timerId = undefined;
        setAlertDegree(cur);
        setIsAlert("");
      }
      timerId = setTimeout(function tick() {
        setIsAlert("alert");
        // if file is being saving, pause timer
        if (open) {
          cur = 0;
          setCurSec(0);
        }

        if (cur < to) {
          if (typeof timerId === "number") {
            setAlertDegree(cur * 20);
            timerId = setTimeout(tick, 1000);
            setCurSec(cur);
          }
        }
        cur += 1;

        if (cur === to) {
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

  let countDownDiv;

  return (
    <div className="main">
      <div className="wrapper">
        <Header theme={theme} text={text} open={open} setOpen={setOpen} />
        <TextBox
          theme={theme}
          text={text}
          setText={setText}
          textarea={textarea}
          count={count}
          setCount={setCount}
        />
        <div>{count}</div>
      </div>
    </div>
  );
}

const CountDownBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: absolute;
  right: 50%;
`;

const AlertBlockLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 20%;
  left: 0;

  /* background: ${(props) =>
    props.alertDegree
      ? css`linear-gradient(
    90deg,
    rgba(109, 127, 141, 0.9) 0%,
    rgba(0, 0, 0, 0) ${props.alertDegree}%
  )`
      : css``}; */
`;

const AlertBlockRight = styled.div`
  position: absolute;
  height: 100%;
  width: 20%;
  right: 0;

  /* background: ${(props) =>
    props.alertDegree
      ? css`linear-gradient(
    -90deg,
    rgba(22, 255, 0, 0.8) 0%,
    rgba(0, 0, 0, 0) ${props.alertDegree}%
  )`
      : css``}; */
`;

export default Main;
