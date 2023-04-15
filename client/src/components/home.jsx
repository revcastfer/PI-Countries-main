import axios from 'axios';
import Cards from './cards.jsx'

export default function  Home(){

const data= async function (){
	let res=await axios('http://localhost:3001/countries');
	let json=await res.data;
	
return  json
} 

 



return(

<div>
	<Cards data={data}/>
</div>



	)

}