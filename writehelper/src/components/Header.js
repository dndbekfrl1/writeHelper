import react, { createElement, useState } from "react";
import styled from "styled-components";
import ThemeChange from "./ThemeChange";

function saveToFile(content, filename, filetype) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: filetype });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  // a.click();

  URL.revokeObjectURL(a.href);
}

function Header({ text, open, setOpen }) {
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <DialogBlock className="">
          <div className="dialogWrapper">
            <div className="dialog">
              <div>다운로드 되었습니다.</div>
              <button onClick={() => onClick()}>확인</button>
            </div>
          </div>
        </DialogBlock>
      )}
      <HeaderBlock className="header">
        <div className="title">당신의 xx 쓰기</div>
        <div className="util">
          <button
            className="export_btn"
            onClick={() => {
              onClick();
              saveToFile(text, "dddd.txt", "text/plain");
            }}
          >
            내보내기
          </button>
          <ThemeChange />
        </div>
      </HeaderBlock>
    </>
  );
}

const DialogBlock = styled.div`
  width: 100%;
  height: 100%;
  z-index: 999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
`;

const HeaderBlock = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  font-size: 24px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  margin-bottom: 8px;
  .util {
    display: flex;
    align-items: flex-end;
  }

  .export_btn {
    cursor: pointer;
    line-height: 20px;
    padding: 8px 12px;
    margin-right: 8px;
  }
`;

export default Header;
