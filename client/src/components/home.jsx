import axios from 'axios';
import Cards from './cards.jsx'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import NotFound from './NotFound.jsx'

import Navbar from './navbar.jsx'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../redux/actions.js'
import{ useNavigate } from "react-router-dom";
import maravillas from '../imgs/maravillas.png'





export default function  Home(){	
let countries=useSelector(state=>state.countriesFilter);
	
const navigate = useNavigate();
const dispatch = useDispatch();

let islogin=useSelector(state=>state.islogin);



useEffect(()=>{
	if(!islogin) {navigate("/")}
},[countries] )





return( <div style={ {height:"100%"} }>
	

	{countries.length>0?<Cards countries={countries}/>:<NotFound/>}
	 
       
	</div> )


}