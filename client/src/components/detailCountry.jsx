import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {useEffect,useState} from 'react'
import { NavLink,useNavigate} from "react-router-dom";

export default function DetailCountry(){
const navigate=useNavigate();
let {detailID}=useParams();

let countries=useSelector(state=>state.countries);
let [country,setCountry]=useState({ID:"",area:0,capital:"",continent:"",flag:"",
	                                            name:"",population:0,subregion:""});

const HandleClick=()=>{navigate(-1) };

useEffect(()=>{

countries.forEach(  coun=>{
  if(coun.ID==detailID) {console.log(coun.area);
  setCountry({ID:coun.ID,
  	          area:coun.area,
  	          capital:coun.capital,
  	          continent:coun.continent,
  	          flag:coun.flag,
  	          name:coun.name,
  	          population:coun.population,
  	          subregion:coun.subregion})   }}    );


console.log(country);


},[])



	return(
<div>
    <button onClick={HandleClick}>BACK TO HOME</button>






</div>
		)
}



