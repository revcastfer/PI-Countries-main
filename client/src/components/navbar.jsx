import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux'
import { NavLink,Outlet, useNavigate } from "react-router-dom";
import {login,logout,a_to_z,z_to_a,setDataFilter} from '../redux/actions.js'
import Searchbar from './searchBar.jsx'
import {useState,useEffect} from 'react'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";
import {} from '../redux/actions.js'


export default function Navbar(props){
const dispatch = useDispatch();
const navigate = useNavigate();

const countries=useSelector(state=>state.countries);
let islogin=useSelector(state=>state.islogin);
const [continents,setContinents]=useState([]);
const [valueContinent,setValueContinent]=useState([]);


const navLogin={display:islogin?"block":"none"}
const Login={display:islogin?"none":"block"}


function logoutNav(){dispatch(logout());navigate("/") };

let continentFilter=(value)=>{
  let continents=[];
  countries.map(ele=>{if(ele.continent==value){continents.push(ele)}})
dispatch( setDataFilter(continents) )
};


 useEffect(()=>{ 
  islogin?navigate("/Home/countries"):navigate("/")
 let continent=[];
countries.map(country=>!continent.includes(country.continent)?continent.push(country.continent):null   );
setContinents(continent)},[countries])

let orden=(orden)=>{  
switch(orden){
case "a_to_z":
dispatch(a_to_z())
break

case "z_to_a":
dispatch(z_to_a())
break

default: console.log("orden") 
}
};







	return (<div>

{continents?<Combobox data={ continents} onChange={value =>continentFilter(value)} placeholder="Search for a continent" />:null}
<Combobox  data={[ ]}  placeholder="Search for a type of activity" />
<Searchbar onSearch={props.onSearch} />
<NavLink to="/activities" >activities</NavLink>
<button onClick={()=>{orden("a_to_z")}} >A-Z</button>
<button onClick={()=>{orden("z_to_a")}} >Z-A</button>
<span  onClick={ ()=>{logoutNav()} }> Logout </span>
<Outlet/>

	 </div> )
}