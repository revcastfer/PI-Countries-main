
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import{ useNavigate } from "react-router-dom";
import {login,getData} from '../redux/actions.js'
import styled from 'styled-components';
import loginLanding from '../imgs/loginLanding.png'
import map from '../imgs/map.png'
import BottomLanding from './BottomLanding.jsx'

export default function Landing(){

let Intro=styled.button`
font-size:45px;
border-radius:25px;
position:absolute;
top:20%;
height:10%;
width:40%;


`


let MsjContainer=styled.div`
position:absolute;
align-items: start;
top:50%;
left:5%;
display:flex;
flex-direction: column;
font-size: 80px;
color:white;
`






var landing = {
  width: "100vw",
  height: "100vh",
  backgroundImage: `url(${loginLanding})`,
  backgroundSize: "cover"
};

let islogin=useSelector(state=>state.islogin);
const dispatch = useDispatch();
const navigate = useNavigate();

function loginNav(){dispatch(login());navigate("/Home/countries") };


useEffect(()=>{
if(islogin){navigate("/Home/countries")}

},[])
	return(

		<div style={landing}>

		<MsjContainer>
		<b>vamos a darle</b>
		<b>la vuelta al mundo...!</b>
		</MsjContainer>

			<span> </span>
			<Intro  onClick={ ()=>{loginNav();dispatch(getData());} }><b> <i>comensar...</i> </b> </Intro>
			<BottomLanding/>
		</div>)

}