import styled from 'styled-components'


export default function Card(props){





	return(
		<div>	       
			<img src={props.flag}  alt={`bandera de ${props.name}`}/>
			<span>{props.name}</span>
			<span>{props.continent}</span>
		</div> 


		)
}