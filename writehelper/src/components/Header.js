import react from "react";
import styled from "styled-components";
function Header() {
  return (
    <HeaderBlock>
      <div>헤더</div>
      <button>btn</button>
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
