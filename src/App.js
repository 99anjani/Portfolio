import Profile from "./PortfolioContainer/Home/Profile";
import Header from "./PortfolioContainer/Header/Header";
import About from "./PortfolioContainer/AboutMe/About";
import Resume from "./PortfolioContainer/Resume/Resume";
import Project from './PortfolioContainer/Projects/Project'
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Link } from "react-router-dom";
import Contact from "./PortfolioContainer/Contact/Contact";

function App() {
  return (
    // <BrowserRouter>
    //   <Header />
    //   <Switch>
    //     <Route path="/">
    //       <Profile />
    //     </Route>
    //     <Route path="/">
    //       <About />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
    <div className="App">
        
          <Header />
          <Profile />
          <About />
          <Resume />
          <Project/>
          <Contact/>
      </div>
  );
}

export default App;
/*
import Profile from "./PortfolioContainer/Home/Profile";
import Header from "./PortfolioContainer/Header/Header";
import About from "./PortfolioContainer/AboutMe/About";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import { Link } from "react-router-dom";
import Project from './PortfolioContainer/Projects/Project';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Profile />} />

            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;

*/
