import styled from 'styled-components'
import { NavLink} from "react-router-dom";
import fondoHome from '../imgs/maravillas.png'
let CardContainer=styled.div`
display:flex;
flex-direction:row;

`


export default function Card(props){





	return(
		<CardContainer>
		    <div>
			<img src={props.flag}  alt={`bandera de ${props.name}`}/>
		    </div>
			<div>
			<div><div>name: </div><NavLink  to={props.ID} ><span>{props.name}</span></NavLink></div>
			<div><div>continent: </div><span>{props.continent}</span></div>
			</div>
		</CardContainer> 


		)
}