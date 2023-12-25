import { useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/common/navbar/NavBar.jsx";
import MainPage from "./components/mainpage/MainPage.jsx";
import Experiences from "./components/experiences/Experiences.jsx";
import Projects from "./components/projects/Projects.jsx";
import Blog from "./components/blog/Blog.jsx";

function App() {
  useEffect(() => {
    document.title = "Mamadou SALL";
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/myportfolio" exact component={MainPage} />
          <Route path="/experiences" exact component={Experiences} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
