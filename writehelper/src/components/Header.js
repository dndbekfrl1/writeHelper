import react from "react";
import styled from "styled-components";
function Header() {
  return (
    <HeaderBlock className="header">
      <div className="title">헤더</div>
      <button className="export_btn">btn</button>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-self: flex-start;
  justify-content: space-between;
  font-size: 24px;
  width: 100%;
  font-weight: bold;
`;

export default Header;
