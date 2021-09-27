import { current } from "immer";
import react, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function TextBox({ text, setText, textarea, count, setCount }) {
  const onChange = (e) => {
    setText(e.target.value);
    setCount(count + 1);
  };

  const onKeyUp = () => {};

  return (
    <Block>
      <TextAreaBlock
        className="text_box"
        ref={textarea}
        text={text}
        onChange={onChange}
        placeholder="5초간 입력이 없으면 글이 사라집니다."
        onKeyUp={onKeyUp}
      ></TextAreaBlock>
      <span>{count}</span>
    </Block>
  );
}

const Block = styled.div`
  height: 90%;
  position: relative;

  span {
    position: absolute;
    bottom: 1.2em;
    right: 1.2em;
  }
`;

const TextAreaBlock = styled.textarea`
  outline: none;
  overflow: auto;
  resize: none;
  height: 100%;
  width: 100%;
  margin: 0;
`;

export default TextBox;
