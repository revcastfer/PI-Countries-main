
import axios from 'axios';

export function getData(){

	return async function(dispatch){
 let countries=await axios('http://localhost:3001/countries');
       dispatch({type:'RECIVE_DATA', payload:countries.data})  
    }
}

