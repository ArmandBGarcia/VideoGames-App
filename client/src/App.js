import { Switch, Route } from "react-router-dom";
import About from "./pages/About";
import ContactForm from "./pages/ContactForm";
import Form from "./pages/Form";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import VideogameEdit from "./pages/VideogameEdit";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
        <Route exact path="/game/:id" component={Game} />
        <Route path="/game/edit/:id" component={VideogameEdit} />
        {/* <Route path="/*" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
