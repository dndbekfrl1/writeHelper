import react, { createElement, useState, useContext } from "react";
import styled from "styled-components";
import ThemeChange from "./ThemeChange";
import { ThemeContext } from "styled-components";
function saveToFile(content, filename, filetype) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: filetype });

  a.href = URL.createObjectURL(file);
  a.download = filename;
  a.click();

  URL.revokeObjectURL(a.href);
}

function Header({ theme, text, open, setOpen }) {
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
        <div className="title">당신의 숙제</div>
        <div className="util">
          <button
            className={"export_btn" + " " + theme}
            onClick={() => {
              onClick();
              saveToFile(text, "딩신의 숙제.txt", "text/plain");
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
  .dialog > button {
    margin: 4px 0 0 0;
  }
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
    line-height: 20px;
    padding: 8px 12px;
    margin-right: 8px;
  }
`;

export default Header;
