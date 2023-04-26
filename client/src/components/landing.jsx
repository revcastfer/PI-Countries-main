
import {useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import{ useNavigate } from "react-router-dom";
import {login,getData} from '../redux/actions.js'

export default function Landing(){



let islogin=useSelector(state=>state.islogin);
const dispatch = useDispatch();
const navigate = useNavigate();

function loginNav(){dispatch(login());navigate("/Home") };


useEffect(()=>{
if(islogin){navigate("/Home")}

},[])
	return(

		<div>
			
			<button  onClick={ ()=>{loginNav();dispatch(getData());} }> Login </button>
		</div>)

}