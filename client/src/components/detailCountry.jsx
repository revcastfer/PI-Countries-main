import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useEffect,useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom";
import axios from 'axios';

export default function DetailCountry(){
const navigate=useNavigate();
let {detailID}=useParams();


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
    <div>name :</div> <div>	{country.name}</div>
     	<img src={country.flag}  alt={`bandera de ${country.name}`}/>
      <div>continent :</div> <div>	{country.continent}</div>
       <div>capital :</div> <div>	{country.capital}</div>
        <div>subregion</div> <div>	{country.subregion}</div>
         <div>area :</div> <div>	{country.area}</div>
          <div>population :</div> <div>	{country.population}</div>

   








</div>
		)
}



