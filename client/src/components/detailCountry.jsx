import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useEffect,useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components'

export default function DetailCountry(){
const navigate=useNavigate();
let {detailID}=useParams();

let CountryDetail=styled.div`
display:flex;
justify-content: center;
background-color: rgba(255, 255, 255,0.1);
backdrop-filter: blur(10px);
boxShadow:0 10px 20px 5px rgba(0,0,0,0.3); 
border:solid 1px rgba(255,255,255,0.5);
border-radius:25px ;
color:white;
font-size:40px;
`;

let Pie=styled(CountryDetail)`
border-radius: 25px 25px 0 0;
`;



let ContainerDetail=styled.div`
display:flex;
justify-content:space-around;
align-items:center ;
height:90vh;`;


let [country,setCountry]=useState({ID: "",
	                                 name: "",
	                                 flag: "",
	                                 continent: "",
	                                 capital:"",
	                                 subregion: "",
	                                 area: 0,
	                                 population: 0,
	                                 activities: []});

const HandleClick=()=>{navigate(-1) };

useEffect(()=>{

axios(`http://localhost:3001/countries/${detailID}`)
.then(res=>res.data)
.then(data=>{setCountry({ID: data.ID,
	                                 name: data.name,
	                                 flag: data.flag,
	                                 continent: data.continent,
	                                 capital:data.capital,
	                                 subregion: data.subregion,
	                                 area: data.area,
	                                 population: data.population,
	                                 activities: data.activities})});
 



},[])



	return(
<div>
    <button onClick={HandleClick}>BACK TO HOME</button>
     <ContainerDetail>
         <div>            
         <img src={country.flag} style={{height:"230px"}}  alt={`bandera de ${country.name}`}/>
         <NavLink  to={ `https://www.google.com/maps/place/${country.name}` } target="_blank" > <button >VIEW TO MAPS</button></NavLink>
         </div>
           

         <CountryDetail> <b>            
               <div>name :   {country.name}</div>    	
               <div>continent : {country.continent}</div>
               <div>capital :{country.capital}</div>
               <div>subregion: 	{country.subregion}</div>
               <div>area :   {country.area}</div>
               <div>population :	{country.population}</div>
                </b> 
          </CountryDetail>

         </ContainerDetail>  

         <Pie>
         	{country.activities.length>0?<div> 
                                   <div>actividades</div> 
                                    {country.activities.map(actividad=>
                                    	               <div>
      	                                               <div><div>nombre :</div> <div>{actividad.name}</div></div>
          																		         <div><div>dificultad :</div> <div>{actividad.dificulty}</div></div>
          																		         <div><div>duracion :</div> <div>{actividad.duration}</div></div>
          																		         <div><div>temporada :</div> <div>{actividad.season}</div></div></div>)} 
                                                     </div>:<div>sin actividades</div>}
         </Pie>    
</div>
		)
}



