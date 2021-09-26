import Main from "./components/Main";
import "./App.css";
import { useState, useRef } from "react";
import { ThemeContext } from "./theme";
import { AlertContext } from "./alert";

function App() {
  const [theme, setTheme] = useState("light");

  const [alert, setAlert] = useState(50);

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
