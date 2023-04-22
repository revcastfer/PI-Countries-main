import axios from 'axios';
import Cards from './cards.jsx'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import fondoHome from '../imgs/marvillas.png'
import Navbar from './navbar.jsx'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../redux/actions.js'

export default function  Home(){
const dispatch = useDispatch();
const [pageNumber,setPageNumber]=useState(0);
let countries=useSelector(state=>state.countries);
let countryPerPage=10;
let pagesVisited=pageNumber*10;

 useEffect(()=>{ 
  dispatch(getData());
  
 },[]);


let displayCountry=()=>{return countries.slice(pagesVisited,pagesVisited+countryPerPage)};
let changePage=({selected})=>{setPageNumber(selected)};


return( <div>
	

	{countries?<Cards data={displayCountry()}  changePage={changePage}/>:<div> cargando</div>}
	 
       
	</div> )


}