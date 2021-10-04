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
import Details from './Components/Details/Details';
// import MenuBar from './Components/MenuBar/MenuBar';



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
            {/* <Route path="/details/:teamId">
              <Details></Details>
            </Route> */}
            <Details></Details>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
