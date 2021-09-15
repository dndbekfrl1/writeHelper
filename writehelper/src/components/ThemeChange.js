import react, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../theme";

function ThemeChange() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <ThemeChangeButton className="toggle_btn" onClick={onClick} />
    </>
  );
}

const ThemeChangeButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  cursor: pointer;
  border-radius: 100%;
`;

export default ThemeChange;
