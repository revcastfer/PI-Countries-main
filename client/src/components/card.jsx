import styled from 'styled-components'


export default function Card(props){


const SpanCard=styled.div`

`



	return(
		<div>	       
			<img src={props.flag}  alt={`bandera de ${props.name}`}/>
			<SpanCard>{props.name}</SpanCard>
			<SpanCard>{props.continent}</SpanCard>
		</div> 


		)
}