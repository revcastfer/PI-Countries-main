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
	const [data,setData]=useState(null);
	const [pageNumber,setPageNumber]=useState(0);
	const [pageCount,setPageCount]=useState(26);
    




   dispatch(getData());

  let countries=useSelector(state=>state.countries);
	const countryPerPage=10;
	const pagesVisited=pageNumber*countryPerPage;
    let displayCountry=()=>{return data.slice(pagesVisited,pagesVisited+countryPerPage)};
	let changePage=({selected})=>{setPageNumber(selected)};

 useEffect(()=>{  

setData(countries);
setPageCount(Math.ceil(countries.length / countryPerPage));


 },[countries])





 


return( <div>

	{data?<Cards data={displayCountry()} pageCount={pageCount} changePage={changePage}/>:<div> cargando</div>}
	 
       
	</div> )


}