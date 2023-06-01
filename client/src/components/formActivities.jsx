
import { useSelector } from 'react-redux'
import {useState,useEffect} from 'react'

import{ useNavigate,NavLink } from "react-router-dom";
import axios from 'axios';
import actividades from '../imgs/actividades.jpg'
import styled from 'styled-components';

export default function FormActivities(){
 
const navigate = useNavigate();

let islogin=useSelector(state=>state.islogin);
let countries=useSelector(state=>state.countries);


let ready={nombre:false,dificultad:false,duracion:false};
let [countriesSelected,setCountriesSelected]=useState([]);


let error={fontSize:"16px",color:"red",visibility:"hidden"}

let Container=styled.div`
display:flex;
flex-direction:row;
font-size:30px;color:white; 
text-align: right;
justify-content:space-around;
height:100vh `;

let ContainerForm=styled(Container)`height:30vh;`

const letrasNegras={color:"black"};
let ButtonBack=styled.button`
background-color:yellow;
height:50px;
width: 180px;
font-size:20px;
border-radius:10px;
position:absolute;
top:15px;
left:80%
 `; 

 let ButtonCreate=styled(ButtonBack)`
 color:white;
 position:relative;
 left:0.15%;
 top:0px;margin:5px`

let ContainerCountriesSelected=styled.div`
background-color:white;
font-size:15px;
color:black;
boder-color:solid 1px black;
border-radius:10px;
width:40vw;
height:30vh;
display:flex;
flex-wrap:wrap;
 `;

const coutrySelecDelete={display:"flex",
                         margin:"10px",
                         backgroundColor:"gray",
                         height:"50px",width:"100px",
                         justifyContent:"space-around",
                         borderRadius:"5px",
                         alignItems:"center",
                         flexWrap:"nowrap"
                     } ;

let names=[];
countries.map(country=>names.push(country.name));

let deleteCountry=(e)=>{
let name=e.target.id;
let newCountries=countriesSelected.filter(ele=>ele!==name);
setCountriesSelected(newCountries)
}

let changeVisibleError=(name,valor)=>{ document.getElementById(name+"Error").style.visibility=valor };

let validate=(e)=>{

let valiNumber=new RegExp("[0-9]");
let validateNumber;
e.target.id!=="nombre"?validateNumber=false:validateNumber=valiNumber.test(e.target.value);

if(e.target.value==""||validateNumber){changeVisibleError(e.target.id,"visible");ready[e.target.id]=false }
else {changeVisibleError(e.target.id,"hidden");ready[e.target.id]=true }
};


 let validatePaises=()=>{if(countriesSelected==""){alert("agregar paises");return false }
else{return true}
 };


 let readyForSend=()=>{if(ready.nombre&&ready.dificultad&&ready.duracion){return true}else{ alert("verificar datos");return false} };

let countryAdd=(e)=>{
let ele=e.target.value;
if(!countriesSelected.includes(ele)) {setCountriesSelected([...countriesSelected,ele]);}

};



useEffect(()=>{if(!islogin) {navigate("/")}},[])



let handleSubmit=(e)=>{
e.preventDefault();

if( validatePaises()&&readyForSend()){

axios.post("http://localhost:3001/activities",{ nombre:document.getElementById("nombre").value ,
                                                dificultad:document.getElementById("dificultad").value ,
                                                duracion:document.getElementById("duracion").value ,
                                                temporada:document.getElementById("temporada").value ,
                                                paises:  countriesSelected.join()      }  ) 
alert("activity created");
}


};



	return( 
     
<div>  

<NavLink to="/Home"  ><ButtonBack ><b>BACK TO HOME</b></ButtonBack></NavLink>
<div style={{fontSize:"60px",display:"flex",color:"#43F94C",padding:"15px"  }} ><i><b>create your favorite tourist activity</b></i></div>


<Container>
 <img src={actividades} style={{width:"40vw",border:"solid 1px black",height:"70vh",borderRadius:"10px"}} alt="actividades turisticas"/> 

<form onSubmit={handleSubmit}>
<ContainerForm>  
<div>
  <div><label>nombre : </label></div>  
  <div><label >dificultad : </label></div>  
  <div><label >duracion : </label ></div>
  <div><label >temporada : </label></div>
</div>


<div>
<div>
 <input id="nombre" onChange={validate} type="text" /> <label id="nombreError" style={error}>verificar nombre</label>
 </div>

<div><select onChange={validate} name="dificultad" id="dificultad">
                                    <option value="" readOnly hidden>escoja la dificultad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select> <label id="dificultadError" style={error}>escoger dificultad</label>
</div>

<div>
<input id="duracion" onChange={validate} type="time" /><label id="duracionError"style={error}>verificar duracion</label></div>
<div> <select onChange={validate}  id="temporada">
                                    <option value="" readOnly hidden>escoja la la estacion</option>
                                    <option value="Verano">Verano</option>
                                    <option value="Otoño" >Otoño</option>
                                    <option value="Invierno">Invierno</option>
                                    <option value="Primavera">Primavera</option>
                                </select> <label id="temporadaError" style={error}>verificar temporada</label>
</div>



</div>
</ContainerForm>
  
<div style={{textAlign:"center"}}>
<select   id="pais" onChange={countryAdd}>
              <option value="" readOnly hidden>escoja sus paises</option>
             {countries.map(ele=><option name={ele.name} value={ele.name}>{ele.name}</option> )}
     </select>
<div>
<ButtonCreate>create</ButtonCreate>
</div>
</div>
<ContainerCountriesSelected id="paises">
{countriesSelected.map(ele=><div style={coutrySelecDelete}> <div>{ele}</div> <span ><sup onClick={deleteCountry} id={ele}>x</sup></span> </div> )}

</ContainerCountriesSelected>



</form>


</Container>


</div>)
}

