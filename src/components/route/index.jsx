import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../mainpage/MainPage";
import Experiences from "../experiences/Experiences.jsx";
import Projects from "../projects/Projects.jsx";

const RoutePage = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/experiences" exact component={Experiences} />
      <Route path="/projects" exact component={Projects} />
    </Switch>
  );
};
export default RoutePage;
