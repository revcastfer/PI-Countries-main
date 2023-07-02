import { useDispatch,useSelector } from 'react-redux'
import {setDataFilter,setPageNumber} from '../redux/actions.js'



export default function SearchBar(props){
let dispatch=useDispatch();
dispatch(setPageNumber(0));

let data =useSelector(state=>state.countries);
let continent =useSelector(state=>state.continent);


let onSearch=(e)=>{
let filter=[];
	if(e.target.value===""&&continent==="All continents"){
     dispatch(setDataFilter(data))
	}

	else if(continent==="All continents"){
		data.map(countryFilter=>
		countryFilter.name.toLowerCase().includes(e.target.value.toLowerCase())?filter.push(countryFilter):null);
	dispatch( setDataFilter(filter) )}
	
	else{	
	data.map(countryFilter=>
		countryFilter.name.toLowerCase().includes(e.target.value.toLowerCase())&&countryFilter.continent===continent?
		filter.push(countryFilter):null);
	dispatch( setDataFilter(filter) )}
    
};



 const inputSearch={borderRadius:"6px",height:"35px", width:"90%",fontSize:"16px", border:"solid 2px green",margin:"10px"}


return(<div>

<input placeholder="  search by name" style={inputSearch}  onChange={onSearch} type="text" />


</div>	)	
}