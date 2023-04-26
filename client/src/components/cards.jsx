import Card from './card.jsx'
import ReactPaginate from "react-paginate";
import styled from 'styled-components';
import "./pagination.css"
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'




export default function Cards(props){
let countries=props.countries;	

let countryPerPage=10;
let pageCount= Math.ceil(countries.length / countryPerPage);
let pagesVisited=props.pageNumber*countryPerPage;        

let displayCountry =countries.slice(pagesVisited,pagesVisited+countryPerPage);



return(

<div>
{displayCountry.map(pais=><Card key={pais.ID} ID={pais.ID} flag={pais.flag} name={pais.name} continent={pais.continent}/>  )}
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={props.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}/>
		

</div>)
}