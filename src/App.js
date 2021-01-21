import React, { Component } from "react";

import ThemeContext from "./context/themeContext";

import "./App.css";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import TimerContainer from "./containers/TimerContainer/TimerContainer";
import AboutContainer from "./containers/AboutContainer/AboutContainer";
import SwitchComponent from "./components/SwitchComponent/SwitchComponent";

class App extends Component {
  state = {
    theme: "light",
    main_page: true,
  };

  showTimerPage = () => {
    this.setState({ main_page: true });
  };

  showAboutPage = () => {
    this.setState({ main_page: false });
  };

  toggleTheme = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  };

  render() {
    return (
      <div className="container">
        <ThemeContext.Provider value={this.state.theme}>
          <NavbarComponent
            showTimer={this.showTimerPage}
            showAbout={this.showAboutPage}
          />
          {/* <SwitchComponent toggleTheme={this.toggleTheme} /> */}
          {this.state.main_page ? <TimerContainer toggleTheme={this.toggleTheme} /> : <AboutContainer />}
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
