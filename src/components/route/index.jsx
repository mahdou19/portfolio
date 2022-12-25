import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "../mainpage/MainPage";

const RoutePage = () => {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
    </Switch>
  );
};
export default RoutePage;
