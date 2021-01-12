import logo from './logo.svg';
import './App.css';

import './App.scss';
import Home from './component/Home'


import Product from './component/Product'


import Specification from './component/Specification'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div >
    <Router>
      <div>
        
       
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Product">
            <Product/>
          </Route>
          
          <Route path="/Specification">
            <Specification/>
          </Route>
          
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
