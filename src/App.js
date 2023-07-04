import Profile from "./PortfolioContainer/Home/Profile";
import Header from "./PortfolioContainer/Header/Header";
import About from "./PortfolioContainer/AboutMe/About";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Link } from "react-router-dom";

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
