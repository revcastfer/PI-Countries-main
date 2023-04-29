import Combobox from "react-widgets/Combobox";
import Multiselect from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import Select from 'react-select'
import{ useNavigate,NavLink } from "react-router-dom";


export default function FormActivities(){


const selectPaises={width:"350px"} ;   
const navigate = useNavigate();

let islogin=useSelector(state=>state.islogin);
let countries=useSelector(state=>state.countries);
let [namesCountries,setNamecountries]=useState([]);
let [countriesSelected,setCountriesSelected]=useState([]);

let names=[];
countries.map(country=>names.push(country.name));


let handleSubmit=(e)=>{
e.preventDefault();


}


let countryAdd=(e)=>{
setCountriesSelected([...countriesSelected,e.target.value]);
console.log(countriesSelected)
};

useEffect(()=>{if(!islogin) {navigate("/")}},[countriesSelected])

	return(
<div>    
<form onSubmit={handleSubmit}>
<div><label>nombre :</label> <input type="text"/></div>
<div><label>dificultad :</label> 
<select name="dificultad" id="dificultad">
  <option value="" readonly hidden>escoja la dificultad</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>  
</div>

<div><label>duracion :</label><input type="time" /></div>
<div>
<label>temporada : </label>  
<select name="temporada" id="temporada">
 <option value="" readonly hidden>escoja la la estacion</option>
  <option value="Verano">Verano</option>
  <option value="Otoño" >Otoño</option>
  <option value="Invierno">Invierno</option>
  <option value="Primavera">Primavera</option>
</select>
</div>

<div>
<select  name="pais" id="pais" onChange={countryAdd}>
 <option value="" readonly hidden>escoja sus paises</option>
{countries.map(ele=><option name={ele.name} value={ele.name}>{ele.name}</option> )}
</select>

</div>
<button>create</button>
</form>

<NavLink  to="/Home" ><button>back to Home</button></NavLink>

{countriesSelected.map(ele=><div></div>)}

</div>)
}