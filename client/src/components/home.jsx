import axios from 'axios';
import Cards from './cards.jsx'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import fondoHome from '../imgs/marvillas.png'
import Navbar from './navbar.jsx'

export default function  Home(){

	const [data,setData]=useState(null);
	const [pageNumber,setPageNumber]=useState(0);
	const [pageCount,setPageCount]=useState(0);

	const countryPerPage=10;
	const pagesVisited=pageNumber*countryPerPage;

	let displayCountry=()=>{return data.slice(pagesVisited,pagesVisited+countryPerPage)};
	let changePage=({selected})=>{setPageNumber(selected)};
	



useEffect(()=>{
  axios('http://localhost:3001/countries')
        .then(dataAxios=>dataAxios.data)
        .then(dataApi=>{setPageCount(Math.ceil(dataApi.length / countryPerPage));setData(dataApi);})


;},[]);
       


const HomeDiv=styled.div`
background-image: url(${fondoHome});

`

 


return( <HomeDiv>

	<Navbar/>
	 {data?<Cards data={displayCountry()} pageCount={pageCount} changePage={changePage} />:<h1>cargando</h1>}
	 
       
	</HomeDiv> )


}