import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Dashboard from "./screens/Dashboard";
import About from "./screens/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
