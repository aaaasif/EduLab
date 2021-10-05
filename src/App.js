import './App.css';
// import Banner from './Components/Banner/Banner';
// import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Success from './Components/Success/Success';


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
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
