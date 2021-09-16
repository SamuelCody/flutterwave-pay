import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Payment from "./components/Payment";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/logout">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
