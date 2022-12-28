import { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/common/navbar/NavBar.jsx";
import MainPage from "./components/mainpage/MainPage.jsx";
import Experiences from "./components/experiences/Experiences.jsx";
import Projects from "./components/projects/Projects.jsx";

function App() {
  useEffect(() => {
    document.title = "Mamadou SALL";
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
