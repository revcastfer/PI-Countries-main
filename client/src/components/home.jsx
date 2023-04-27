import axios from 'axios';
import Cards from './cards.jsx'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import fondoHome from '../imgs/marvillas.png'
import Navbar from './navbar.jsx'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../redux/actions.js'
import{ useNavigate } from "react-router-dom";





export default function  Home(){	
let data=useSelector(state=>state.countries);
let[countries,setCountries]=useState([]);	
const navigate = useNavigate();
const dispatch = useDispatch();

const [pageNumber,setPageNumber]=useState(0);
let islogin=useSelector(state=>state.islogin);
if(!islogin) {navigate("/")};




let onSearch=(e)=>{
console.log(e.target.value);
let filter=[]
data.map(countryFilter=>countryFilter.name.toLowerCase().includes(e.target.value.toLowerCase())?filter.push(countryFilter):null);
console.log(filter);
	setCountries(filter)
};


let changePage=({selected})=>{setPageNumber(selected)};

useEffect(()=>{
console.log("render");
setCountries(data)

},[data] )





return( <div>
	
    <Navbar countries={countries} onSearch={onSearch} />
	<Cards countries={countries} pageNumber={pageNumber} changePage={changePage}  setCountries={setCountries}/>
	 
       
	</div> )


}