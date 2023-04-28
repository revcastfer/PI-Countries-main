import Card from './card.jsx'
import ReactPaginate from "react-paginate";
import styled from 'styled-components';
import "./pagination.css"
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import {setPageNumber} from '../redux/actions.js'



export default function Cards(props){
let countries=useSelector(state=>state.countriesFilter)	;
let pageNumber=useSelector(state=>state.page);
let dispatch=useDispatch();

let countryPerPage=10;
let pageCount= Math.ceil(countries.length / countryPerPage);
let pagesVisited=pageNumber*countryPerPage;        

let displayCountry =countries.slice(pagesVisited,pagesVisited+countryPerPage);



return(

<div>
{displayCountry.map(pais=><Card key={pais.ID} ID={pais.ID} flag={pais.flag} name={pais.name} continent={pais.continent}/>  )}
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={({selected})=>{dispatch(setPageNumber(selected))}}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}/>
		

</div>)
}