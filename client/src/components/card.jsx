import styled from 'styled-components'
import { NavLink} from "react-router-dom";




export default function Card(props){





	return(
		<div>	       
			<img src={props.flag}  alt={`bandera de ${props.name}`}/>
			<NavLink  to={props.ID} >  <span>{props.name}</span></NavLink>
			<span>{props.continent}</span>
		</div> 


		)
}