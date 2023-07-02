
import Cards from './cards.jsx'
import {useEffect} from 'react'

import NotFound from './NotFound.jsx'

import {useSelector } from 'react-redux'

import{ useNavigate } from "react-router-dom";






export default function  Home(){	

let countries=useSelector(state=>state.countriesFilter);
let islogin=useSelector(state=>state.islogin);	
const navigate = useNavigate();







useEffect(()=>{
	if(!islogin) {navigate("/")}
},[countries,islogin,navigate])

 



return( <div style={ {height:"100%"} }>
	

	{countries.length>0?<Cards countries={countries}/>:<NotFound/>}
	 
       
	</div> )


}