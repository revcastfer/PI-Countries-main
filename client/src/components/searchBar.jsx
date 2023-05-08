import { useDispatch,useSelector } from 'react-redux'
import {setDataFilter,setPageNumber} from '../redux/actions.js'



export default function SearchBar(props){
let dispatch=useDispatch();

let data =useSelector(state=>state.countries);

let onSearch=(e)=>{

	if(!e.target.value==""){
	dispatch(setPageNumber(0));
	let filter=[];
	data.map(countryFilter=>countryFilter.name.toLowerCase().includes(e.target.value.toLowerCase())?filter.push(countryFilter):null);
	dispatch( setDataFilter(filter) )}
	else {dispatch(setDataFilter(data))}
};



 const inputSearch={borderRadius:"6px",height:"35px", width:"90%",fontSize:"16px", border:"solid 2px green",margin:"10px"}


return(<div>

<input placeholder="  search by name" style={inputSearch}  onChange={onSearch} type="text" />


</div>	)	
}