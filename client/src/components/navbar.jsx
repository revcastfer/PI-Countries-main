import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux'
import { NavLink,Outlet, useNavigate } from "react-router-dom";
import {login,logout,a_to_z,z_to_a} from '../redux/actions.js'
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


console.log(valueContinent);

 useEffect(()=>{ 
 let continent=[];
countries.map(country=>!continent.includes(country.continent)?continent.push(country.continent):null   );
setContinents(continent)},[countries])


	return (<div>

{continents?<Combobox data={ continents} onChange={value => setValueContinent(value)} placeholder="Search for a continent" />:null}
<Combobox  data={[ ]}  placeholder="Search for a type of activity" />

<Searchbar onSearch={props.onSearch} />
<NavLink to="/activities" >activities</NavLink>






<button onClick={()=>{dispatch(a_to_z() ) }}>A-Z</button>
<button onClick={()=>{dispatch(z_to_a() ) }}>Z-A</button>

<span style={navLogin} onClick={ ()=>{logoutNav()} }> Logout </span>



	 </div> )
}