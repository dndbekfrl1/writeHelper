import Main from "./components/Main";
import "./App.css";
import { useState } from "react";
import { ThemeContext } from "./theme";

function App() {
  const [theme, setTheme] = useState("light");

  console.log("theme", theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" app-theme={theme}>
        <div className="wrapper">
          <Main />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
