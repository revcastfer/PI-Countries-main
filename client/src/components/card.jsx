import styled from 'styled-components'
import { NavLink} from "react-router-dom";


let CardContainer=styled.div`
display:flex;
flex-direction:row;
align-items: center;
font-size:20px;

color:white;
margin:40px
`

let descrip={
backgroundColor:"rgba(255, 255, 255,0.1)",
backdropFilter: "blur(10px)",
boxShadow:"0 10px 20px 5px rgba(0,0,0,0.3)", 
border:"solid 1px rgba(255,255,255,0.5)",
borderRadius:"0 25px 25px 0",
height:"100%",
width:"180px",
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center" 
  };

let image={
height:"220px",

}

export default function Card(props){


	return(
		<CardContainer>
		    <div style={image}>
			<img  style={image} src={props.flag}  alt={`bandera de ${props.name}`}/>
		    </div>

			<div style={descrip}>
			<div><b>name: </b></div><NavLink style={{textDecoration:"none",color:"green",fontSize:"30px"}} to={props.ID} ><span><b>{props.name}</b></span></NavLink>
			<div><b>continent: </b></div><span>{props.continent}</span>
			</div>
		</CardContainer> 


		)
}