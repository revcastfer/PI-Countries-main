import Home from'./components/home.jsx';
import Navbar from'./components/navbar.jsx';
import Landing from'./components/landing.jsx';
import DetailCountry from './components/detailCountry.jsx';
import FormActivities from './components/formActivities.jsx';
import './App.css';
import {  Routes,Route,useparams } from "react-router-dom";

function App() {
  return (
    <div className="App">

   <Routes>
   <Route path="/" element={<Landing/>}/>
   <Route path="Home" element={<Home/>} />
   <Route path="activities" element={<FormActivities/>} /> 
   <Route path="Home/:detailID" element={<DetailCountry/>} />   
  
    </Routes> 
    </div>
  )
}

export default App;
