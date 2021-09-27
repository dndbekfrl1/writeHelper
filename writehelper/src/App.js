import Main from "./components/Main";
import "./App.css";
import { useState, useRef } from "react";
import { ThemeContext } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  const Appdiv = useRef();

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" app-theme={theme} ref={Appdiv}>
        <Main Appdiv={Appdiv} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
