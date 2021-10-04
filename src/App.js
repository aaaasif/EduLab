import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuBar from './Components/MenuBar/MenuBar';



function App() {
  return (
    <div className="App">
     <Router>
        <Switch>
          <Banner></Banner>
             <Route path="/menu">
               <MenuBar></MenuBar>
             </Route>
             <Route path="/button">
               <h1>this is button</h1>
             </Route>
          <Footer></Footer>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
