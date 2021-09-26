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
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 100%;
`;

export default ThemeChange;
