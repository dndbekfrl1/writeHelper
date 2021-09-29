import Main from "./components/Main";
import "./App.css";
import { useState, useRef, useContext } from "react";
import { ThemeContext } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={"App" + " " + theme} app-theme={theme}>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
