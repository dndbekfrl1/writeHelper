import Main from "./components/Main";
import "./App.css";
import { useState, useRef, useContext } from "react";
import { AlertContext, ThemeContext } from "./theme";

function App() {
  const [theme, setTheme] = useState("dark");
  const [isAlert, setIsAlert] = useState("");
  return (
    <AlertContext.Provider value={{ isAlert, setIsAlert }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={"App" + " " + theme + " " + isAlert} app-theme={theme}>
          <Main />
        </div>
      </ThemeContext.Provider>
    </AlertContext.Provider>
  );
}

export default App;
