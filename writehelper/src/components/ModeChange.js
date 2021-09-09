import react from "react";
import styled from "styled-components";

function ModeChange() {
  return (
    <>
      <ModeChangeButton />
    </>
  );
}

const ModeChangeButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: black;
  border-radius: 100%;
`;

export default ModeChange;
