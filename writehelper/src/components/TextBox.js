import { current } from "immer";
import react, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

let to = 2;
let cur = 0;
let timerId;

function TextBox() {
  const [text, setText] = useState(null);
  const textarea = useRef();
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
          setText(null);
          console.log("text", text);
          textarea.current.value = "";
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
      <TextAreaBlock
        className="text_box"
        ref={textarea}
        text={text}
        onChange={onChange}
      ></TextAreaBlock>
      {/* <ColorContext.Consumer>
        {(value) => (
          <TextAreaBlock
            color={value.color}
            ref={textarea}
            text={text}
            onChange={onChange}
          ></TextAreaBlock>
        )}
      </ColorContext.Consumer> */}
    </>
  );
}

const TextAreaBlock = styled.textarea`
  border: none;
  outline: none;
  overflow: auto;
  resize: none;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  margin: 0;
`;

export default TextBox;
