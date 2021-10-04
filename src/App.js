import './App.css';
import Banner from './Components/Banner/Banner';
import DisplayCourse from './Components/DisplayCourse/DisplayCourse';
import Footer from './Components/Footer/Footer'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import MenuBar from './Components/MenuBar/MenuBar';



function App() {
  return (
    <div className="App">
     <Banner></Banner>
     <DisplayCourse></DisplayCourse>
     <Footer></Footer>
    </div>
  );
}

export default App;
