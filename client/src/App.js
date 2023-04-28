import Home from'./components/home.jsx';
import Navbar from'./components/navbar.jsx';
import Landing from'./components/landing.jsx';
import DetailCountry from './components/detailCountry.jsx';
import FormActivities from './components/formActivities.jsx';
import './App.css';
import {  Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

   <Routes>
   <Route path="/" element={<Landing/>}/>

   <Route path="/Home" element={<Navbar/>} >
    <Route path="/Home/countries" element={<Home/>} />
   </Route>   

   <Route path="/Home/countries/:detailID" element={<DetailCountry/>} />   
    <Route path="/activities" element={<FormActivities/>} /> 
    </Routes> 
    </div>
  )
}

export default App;
