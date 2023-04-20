import Card from './card.jsx'
import ReactPaginate from "react-paginate";
import styled from 'styled-components';
import "./pagination.css"
import { useDispatch,useSelector } from 'react-redux'





export default function Cards(props){
let countries=useSelector(state=>state.countries);	
const countryPerPage=10;
let pageCount= Math.ceil(countries.length / countryPerPage);
        



return(

<div>
{props.data.map(pais=><Card key={pais.ID} flag={pais.flag} name={pais.name} continent={pais.continent}/>  )}
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