import ReactDOM from "react-dom";
import Home from "./Home.js";
import Top from "./Top.js";
import Session from "./Session.js";
import Seats from "./Seats.js";
import Success from "./Success.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [infos, setInfos] = useState({});

  return (
    <BrowserRouter>
      <Top />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/session/:idMovie" exact>
          <Session />
        </Route>
        <Route path="/seats/:idSession" exact>
          <Seats setInfos={setInfos} />
        </Route>
        <Route path="/success" exact>
          <Success infos={infos} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
