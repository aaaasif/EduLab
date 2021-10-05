import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Success from './Components/Success/Success';
import About from './Components/About/About';
import ShoingAllCourses from './Components/ShoingAllCourses/ShoingAllCourses';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div >
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/success">
              <Success></Success>
            </Route>
            <Route path="/courses">
              <ShoingAllCourses></ShoingAllCourses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
