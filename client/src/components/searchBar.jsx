import { useDispatch,useSelector } from 'react-redux'
import {setDataFilter} from '../redux/actions.js'



export default function SearchBar(props){
let dispatch=useDispatch();
let countries =useSelector(state=>state.countries) ;
let data =useSelector(state=>state.countriesFilter);

let   onSearch=(e)=>{
	if(!e.target.value==""){
let filter=[]
data.map(countryFilter=>countryFilter.name.toLowerCase().includes(e.target.value.toLowerCase())?filter.push(countryFilter):null);
console.log(filter);
	dispatch( setDataFilter(filter) )}
	else {dispatch(setDataFilter(countries))}
};


 


return(<div>

<label>search</label> 
<input   onChange={onSearch} type="text" />


</div>	)	
}