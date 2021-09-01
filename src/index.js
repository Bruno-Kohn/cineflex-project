import ReactDOM from "react-dom";
import Home from "./Home.js";
import Top from "./Top.js";
import Session from "./Session.js";
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
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
