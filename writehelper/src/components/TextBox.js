import { current } from "immer";
import react, { useEffect, useState } from "react";
import styled from "styled-components";

// function Timeout(from, to) {
//   let current = from;
//   timer = setTimeout(function tick() {
//     if (current < to) {
//       console.log("tick", timer, current);
//       setTimeout(tick, 1000);
//     }
//     current += 1;
//     if (current === to) {
//       console.log("time out");
//     }
//   }, 1000);
//   clearTimeout(timer);
// }

// let timer = {
//   remind: function (aMessage) {
//     alert(aMessage);
//     this.timeoutID = undefined;
//   },

//   tick: function (current, to) {
//     console.log("tick", current);
//     this.ticktok = setTimeout(function tick() {
//       if (current < to) {
//         setTimeout(this.tick, 1000);
//       }
//       current += 1;
//     }, 1000);
//   },

//   setup: function (from, to) {
//     if (typeof this.timeoutID === "number") {
//       this.cancel();
//     }
//     let current = from;
//     this.timeoutID = setTimeout(
//       function (current) {
//         this.tick(current, to);
//       }.bind(this),
//       3000,
//       current
//     );
//   },

//   cancel: function () {
//     clearTimeout(this.timeoutID);
//   },
// };
let to = 3;
let cur = 0;
function setUpTimer() {
  let timerId = setTimeout(function tick() {
    if (cur < to) {
      console.log(timerId, cur, to);
      setTimeout(tick, 1000);
    }
    cur += 1;
    if (cur === to) {
      console.log("time out");
    }
  }, 1000);
  // clearTimeout(timerId);
  // console.log("timerId", timerId);
}

let timerId;
function TextBox() {
  const [text, setText] = useState(null);
  useEffect(() => {
    const setTimer = () => {
      if (typeof timerId === "number") {
        console.log("new input", "curID:", timerId);
        cur = 0;
        clearTimeout(timerId);
        timerId = undefined;
      }
      timerId = setTimeout(function tick() {
        if (cur < to) {
          if (typeof timerId === "number") {
            console.log(timerId, cur, to);
            timerId = setTimeout(tick, 1000);
          }
        }
        cur += 1;
        if (cur === to) {
          console.log(timerId, "time out");
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

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <TextAreaBlock onChange={onChange}></TextAreaBlock>
    </>
  );
}

const TextAreaBlock = styled.textarea`
  border: none;
  outline: none;
  overflow: auto;
  resize: none;
  min-width: 400px;
  height: 100%;
  border: 1px solid black;
`;

export default TextBox;
