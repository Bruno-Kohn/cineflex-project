import ReactDOM from "react-dom";
import Home from "./Home.js";
import Top from "./Top.js";

function App() {
  return (
    <>
      <Top />
      <Home />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
