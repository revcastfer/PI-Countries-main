import Combobox from "react-widgets/Combobox";
import { useDispatch,useSelector } from 'react-redux'
import {useState,useEffect} from 'react'
import Select from 'react-select'
import{ useNavigate,NavLink } from "react-router-dom";
import axios from 'axios';

export default function FormActivities(){


const selectPaises={width:"350px"} ;   
const navigate = useNavigate();

let islogin=useSelector(state=>state.islogin);
let countries=useSelector(state=>state.countries);
let [namesCountries,setNamecountries]=useState([]);
let [countriesSelected,setCountriesSelected]=useState([]);
let [errors,setErrors]=useState({name:"" ,dificultad:"" ,duracion:"" ,temporada:"" ,paises:"",validate:0});


let names=[];
countries.map(country=>names .push(country.name));


let handleSubmit=(e)=>{
e.preventDefault();
if(errors.validate==1){
axios.post("http://localhost:3001/activities",{ nombre:document.getElementById("nombre").value ,
                                                dificultad:document.getElementById("dificultad").value ,
                                                duracion:document.getElementById("duracion").value ,
                                                temporada:document.getElementById("temporada").value ,
                                                paises:  countriesSelected.join()      }  ) }

};

let deleteCountry=(e)=>{
let name=e.target.id;

let newCountries=countriesSelected.filter(ele=>ele!=name);
setCountriesSelected(newCountries)

}


let validate=(e)=>{
let validateName=document.getElementById("nombre").value;
let validateDificultad=document.getElementById("dificultad").value;
let validateDuracion=document.getElementById("duracion").value;
let validateTemporada=document.getElementById("temporada").value;


if(!validateName){ setErrors({...errors,name:"ingrese nombre"}) } else  { setErrors({...errors,name:""}) };
if(validateDificultad==""){ setErrors({...errors,dificultad:"ingrese dificultad"}) } else { setErrors({...errors,dificultad:""}) };
if(validateDuracion==""){ setErrors({...errors,duracion:"ingrese durcion"}) } else { setErrors({...errors,duracion:""}) };
if(validateTemporada==""){ setErrors({...errors,temporada:"ingrese temporada"}) } else { setErrors({...errors,temporada:""}) };
if(countriesSelected.length==0){ setErrors({...errors,paises:"ingrese paises"}) } else { setErrors({...errors,paises:""}) };

if(errors.name=="" && errors.dificultad=="" && errors.duracion=="" && errors.temporada=="" && errors.paises=="")
    {setErrors({...errors,validate:1})} else {setErrors({...errors,validate:0})}
console.log(countriesSelected);console.log(errors);
}


let countryAdd=(e)=>{
let ele=e.target.value;
if(!countriesSelected.includes(ele)) {setCountriesSelected([...countriesSelected,ele]);}
validate(e)
};



useEffect(()=>{if(!islogin) {navigate("/")}},[countriesSelected])

	return(
<div>    
<form onSubmit={handleSubmit}>

<div>
<label>nombre :</label> <input id="nombre" onChange={validate} type="text" /><label>{errors.name}</label></div>

<div><label>dificultad :</label><select onChange={validate} name="dificultad" id="dificultad">
                                    <option value="" readOnly hidden>escoja la dificultad</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select> <label>{errors.dificultad}</label>
</div>

<div>
<label>duracion :</label ><input id="duracion" onChange={validate} type="time" /><label>{errors.duracion}</label></div>
<div><label>temporada : </label> <select onChange={validate} name="temporada" id="temporada">
                                    <option value="" readOnly hidden>escoja la la estacion</option>
                                    <option value="Verano">Verano</option>
                                    <option value="Otoño" >Otoño</option>
                                    <option value="Invierno">Invierno</option>
                                    <option value="Primavera">Primavera</option>
                                </select> <label>{errors.temporada}</label>
</div>

<div>
<select  name="pais" id="pais" onChange={countryAdd}>
              <option value="" readOnly hidden>escoja sus paises</option>
             {countries.map(ele=><option name={ele.name} value={ele.name}>{ele.name}</option> )}
     </select><label>{errors.paises}</label>
</div>

<button>create</button>
</form>

<NavLink  to="/Home" ><button>back to Home</button></NavLink>

{countriesSelected.map(ele=><div></div>)}


<div id="containerCountries">
{countriesSelected.map(ele=><div> <div>{ele}</div><span onClick={deleteCountry} id={ele} >x</span> </div> )}

</div>

</div>)
}