import react, { useEffect, useState } from "react";
import styled from "styled-components";

let timer;
function Timeout(from, to) {
  let current = from;
  clearTimeout(timer);
  timer = setTimeout(function tick() {
    if (current < to) {
      console.log("tick", current);
      setTimeout(tick, 1000);
    }
    current += 1;
  }, 1000);
}

function TextBox() {
  const [text, setText] = useState(null);
  useEffect(() => {
    if (text) {
      Timeout(0, 3);
    }
  }, [text]);

  const onChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <>
      <TextAreaBlock onChange={onChange} onKeyUp={null}></TextAreaBlock>
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
