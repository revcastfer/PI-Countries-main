import Combobox from "react-widgets/Combobox";
import Multiselect from "react-widgets/Combobox";
import "react-widgets/styles.css";
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import Select from 'react-select'
import{ useNavigate,NavLink } from "react-router-dom";


export default function FormActivities(){
const navigate = useNavigate();
let islogin=useSelector(state=>state.islogin);

useEffect(()=>{if(!islogin) {navigate("/")}},[])


let countries=useSelector(state=>state.countries);
let [namesCountries,setNamecountries]=useState([]);
let [countriesSelected,setCountriesSelected]=useState([]);


let names=[];
countries.map(country=>names.push(country.name));
console.log(countries);



let dataA= countries.sort((x, y) => x.name.localeCompare(y.name));

let valuesCombo=[];
dataA.map(country=>valuesCombo.push({ value: country.name, label: country.name, color: '#00B8D9', isFixed: true }) )



	return(
<form>
<label>nombre</label> <input type="text"/>

<label>dificultad</label> <input type="text"/>
<label>duracion</label>  <input type="time" />
<label>temporada</label>  <input type="text" />
<Select
    
    isMulti
    name="countries"
    options={valuesCombo }   className="basic-multi-select"
    classNamePrefix="select"
  />


<NavLink  to="/Home" ><button>back to Home</button></NavLink>
<button>create</button>

</form>)
}