import Home from'./components/home.jsx';
import FormActivities from './components/formActivities.jsx';
import './App.css';
import { Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <Router>
   <Switch>
       < Route path="/home" element={<Home/>}/>
      <Route path="/activities" element={<FormActivities/>}/>
    </Switch>
 </Router>
     
    </div>
  );
}

export default App;
