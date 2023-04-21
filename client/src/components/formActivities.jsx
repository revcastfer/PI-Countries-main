import Combobox from "react-widgets/Combobox";
import Multiselect from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import Select from 'react-select'



export default function FormActivities(){

	let countries=useSelector(state=>state.countries);
	let [namesCountries,setNamecountries]=useState([]);
	let [countriesSelected,setCountriesSelected]=useState([]);


let names=[];
countries.map(country=>names.push(country.name));
console.log(countries);





	return(
<form>
<label>nombre</label> <input type="text"/>

<label>dificultad</label> <input type="text"/>
<label>duracion</label>  <input type="time" />
<label>temporada</label>  <input type="text" />
<Select
    
    isMulti
    name="countries"
    options={[{ value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true }] }   className="basic-multi-select"
    classNamePrefix="select"
  />



<button>create</button>

</form>)
}