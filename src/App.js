import Home from "./Home";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import TableView from "./TableView";
import CardView from "./CardView";

function App() {
  return (
    <Router>
     
      <div className="App">
        <div className="content">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/table">
              <TableView />
            </Route>
            <Route path="/card">
              <CardView />
            </Route>
            <Route path="/faq">
              <div><h1>Test</h1></div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
