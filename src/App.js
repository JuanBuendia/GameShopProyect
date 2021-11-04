import "./App.css";
import { HashRouter, Switch, Route  } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <HashRouter>
      <Switch>
      <Route exact path="/" component={Home}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
