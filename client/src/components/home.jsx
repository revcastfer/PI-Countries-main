import axios from 'axios';
import Cards from './cards.jsx'
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import fondoHome from '../imgs/marvillas.png'
import Navbar from './navbar.jsx'
import { useDispatch,useSelector } from 'react-redux'
import {getData} from '../redux/actions.js'
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";






export default function  Home(){
const dispatch = useDispatch();
const [pageNumber,setPageNumber]=useState(0);
const [continents,setContinents]=useState([]);
let countries=useSelector(state=>state.countries);


 useEffect(()=>{ 
  dispatch(getData());
 
let continent=[];
countries.map(country=>!continent.includes(country.continent)?continent.push(country.continent):null   );
setContinents(continent);


 },[]);



let changePage=({selected})=>{setPageNumber(selected)};


return( <div>
	<button>A-Z</button>
    <button>Z-A</button>

{continents?<Combobox data={ continents} 
placeholder="Search for a continent" />:null}

<Combobox  data={[ ]}  placeholder="Search for a type of activity" />

	{countries?<Cards countries={countries} pageNumber={pageNumber} changePage={changePage}/>:<div> cargando</div>}
	 
       
	</div> )


}