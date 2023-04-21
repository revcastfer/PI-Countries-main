import Home from'./components/home.jsx';
import Navbar from'./components/navbar.jsx';
import FormActivities from './components/formActivities.jsx';
import './App.css';
import {  Routes,Route,useparams } from "react-router-dom";

function App() {
  return (
    <div className="App">

   <Routes>
   <Route path="/" element={<Navbar/>}>
       <Route path="Home" element={<Home/>} />
       <Route path="activities" element={<FormActivities/>} />   
   </Route>
    </Routes> 
    </div>
  )
}

export default App;
