import Card from './card.jsx'
import ReactPaginate from "react-paginate";
import styled from 'styled-components';
import "./pagination.css"






export default function Cards(props){
	console.log(props)

return(

<div>
{props.data.map(pais=><Card key={pais.ID} flag={pais.flag} name={pais.name} continent={pais.continent}/>  )}
<ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={props.pageCount}
        onPageChange={props.changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}/>
		

</div>)
}