import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux'
import { NavLink,Outlet, useNavigate } from "react-router-dom";
import {login,logout,a_to_z,z_to_a,setDataFilter,setPageNumber} from '../redux/actions.js'
import Searchbar from './searchBar.jsx'
import {useState,useEffect} from 'react'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";



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
  dispatch(setPageNumber(0));
   let filterForContinents=[];

    if(value=="All continents")
        {dispatch(setDataFilter(countries))}
    else{ 
        countries.map(ele=>{if(ele.continent==value){filterForContinents.push(ele) }})
    };      

        if(filterForContinents.length>1){dispatch( setDataFilter(filterForContinents) )}
            
};


 useEffect(()=>{ 
    islogin?navigate("/Home/countries"):navigate("/")
    let continent=[];
    countries.map(country=>!continent.includes(country.continent)?continent.push(country.continent):null   );
    setContinents(continent)},
[countries,])

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

<Combobox data={ [...continents,"All continents"]} onChange={value =>continentFilter(value)} placeholder="Search for a continent" />
<Combobox data={ ["a-z","z-a"]} onChange={value =>orden(value)} placeholder="Search for order" />

<Combobox  data={[ ]}  placeholder="Search for a type of activity" />
<Searchbar />
<NavLink to="/activities" >activities</NavLink>

<span  onClick={ ()=>{logoutNav()} }> Logout </span>
<Outlet/>

	 </div> )
}