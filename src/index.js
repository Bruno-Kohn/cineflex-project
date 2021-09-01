import ReactDOM from "react-dom";
import Home from "./Home.js";
import Top from "./Top.js";
import Session from "./Session.js";
import Seats from "./Seats.js";
import Success from "./Success.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/session" exact>
          <Session />
        </Route>
        <Route path="/seats" exact>
          <Seats />
        </Route>
        <Route path="/success" exact>
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
