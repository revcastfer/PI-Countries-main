import styled from 'styled-components';

import { NavLink,Outlet } from "react-router-dom";


export default function Navbar(){




	return (<div>



<NavLink
  to="/activities" >activities</NavLink>
  <NavLink
  to="/Home" >Home</NavLink>




<Outlet/>
	 </div> )
}