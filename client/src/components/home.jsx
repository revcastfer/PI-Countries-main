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
let countries=useSelector(state=>state.countriesFilter);
	
const navigate = useNavigate();
const dispatch = useDispatch();

const [pageNumber,setPageNumber]=useState(0);
let islogin=useSelector(state=>state.islogin);










let changePage=({selected})=>{setPageNumber(selected)};

useEffect(()=>{
if(!islogin) {navigate("/")};
console.log("render");

},[countries] )





return( <div>
	

	<Cards countries={countries} pageNumber={pageNumber} changePage={changePage}  s/>
	 
       
	</div> )


}