import Profile from "./PortfolioContainer/Home/Profile";
import Header from "./PortfolioContainer/Header/Header";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Project from "./PortfolioContainer/Projects/Project";
import "./App.css";
// import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "./PortfolioContainer/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <About />
      <Resume/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
