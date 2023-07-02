import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux'
import { NavLink,Outlet, useNavigate } from "react-router-dom";
import {logout,a_to_z,z_to_a,setDataFilter,setPageNumber} from '../redux/actions.js'
import Searchbar from './searchBar.jsx'
import {useState,useEffect} from 'react'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";

const Combos=styled.div` 
display:flex;
justify-content:space-around;
 `;

 const Nombre=styled.div`background: linear-gradient(to bottom, red 0%, orange 50.48%, yellow 100%);
 border-radius:25px;
 color:white;
 width:40% `

const combos={height:"38px", width:"22%", padding:"10px"};
const losOutSyle={display:"flex",justifyContent:"space-around" ,right:"30px",color:"red",fontSize:"25px"}



export default function Navbar(props){
const dispatch = useDispatch();
const navigate = useNavigate();

const countries=useSelector(state=>state.countries);
const countriesFilter=useSelector(state=>state.countriesFilter);
let islogin=useSelector(state=>state.islogin);
const [continents,setContinents]=useState([]);




function logoutNav(){dispatch(logout());navigate("/") };

let continentFilter=(value)=>{
   dispatch(setPageNumber(0));
   let filterForContinents=[];

    if(value==="All continents"){dispatch(setDataFilter(countries))}
    else{ countries.forEach(ele=>{if(ele.continent===value){filterForContinents.push(ele)}}) };      

    if(filterForContinents.length>1){dispatch( setDataFilter(filterForContinents) )}            
};



 useEffect(()=>{ 
    islogin?navigate("/Home/countries"):navigate("/")
    let continent=[];
    countries.map(country=>!continent.includes(country.continent)?continent.push(country.continent):null   );
    setContinents(continent)},

[countriesFilter,countries,navigate,islogin])


let orden=(orden)=>{  
switch(orden){

    case "a-z":
        dispatch(a_to_z())
        break 

    case "z-a":
        dispatch(z_to_a())
        break

default: console.log("orden")}
};





	return (<div>

<Combos>
<Combobox style={combos} data={ [...continents,"All continents"]} onChange={value =>continentFilter(value)} placeholder="Search for a continent" />


<Combobox style={combos} data={ ["a-z","z-a"]} onChange={value =>orden(value)} placeholder="Search for order" />


<Combobox style={combos} data={[ ]}  placeholder="Search for a type of activity" />


<Searchbar />
</Combos>

<div style={losOutSyle}>
<NavLink to="/activities" style={{fontSize:"36px",textDecoration:"none",color:"orange"}} ><b>activities</b></NavLink>
<Nombre><b>PI COUNTRIES by Fenando Revilla</b></Nombre>
<span   onClick={ ()=>{logoutNav()} }> <b><i style={{cursor: 'pointer'}}>logout</i></b> </span>
</div>
<Outlet/>

	 </div> )
}