import { current } from "immer";
import react, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function TextBox({ text, setText, textarea }) {
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
    </>
  );
}

const TextAreaBlock = styled.textarea`
  outline: none;
  overflow: auto;
  resize: none;
  height: 90%;
  width: 100%;
  margin: 0;
`;

export default TextBox;
