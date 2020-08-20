import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/home/index";
import Header from "./components/header/index";
import About from "./components/about";
import Blog from "./components/blog";
import Projects from "./components/projects";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const theme = createMuiTheme({
    palette: {
      type: themeMode,
      primary: {
        main: themeMode === "light" ? "#fff" : "#22262c",
      },
    },
  });

  const handleLightMode = () => {
    document.querySelector("body").style.backgroundColor = "#fff";
    document.querySelector("body").style.color = "#22262c";

    setThemeMode("light");
  };

  const handleDarkMode = () => {
    document.querySelector("body").style.backgroundColor = "#22262c";
    document.querySelector("body").style.color = "#fff";

    setThemeMode("dark");
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header
            themeMode={themeMode}
            lightMode={handleLightMode}
            darkMode={handleDarkMode}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/project" component={Projects} />
          </Switch>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
