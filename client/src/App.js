import { Switch, Route } from "react-router-dom";
import Form from "./pages/Form";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/game/:id" component={Game} />
      </Switch>
    </div>
  );
}

export default App;
