import Home from "./Home";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import TableView from "./TableView";

function App() {
  return (
   <Router>      <div className="App">
        
        <div className="content">
            <Navbar />
              <Home />
            
             
          
        </div>
      </div>
      </Router>

  );
}

export default App;
