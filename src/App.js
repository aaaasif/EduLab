import './App.css';
import Header from './Components/Header/Header';
// import Banner from './Components/Banner/Banner';
// import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
// import Footer from './Components/Footer/Footer'
// import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
// import MenuBar from './Components/MenuBar/MenuBar';



function App() {
  return (
    <div >
      <Router>
      <Header></Header>
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
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
