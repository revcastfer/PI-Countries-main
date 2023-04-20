import styled from 'styled-components';
import Combobox from "react-widgets/Combobox";
import "react-widgets/styles.css";


export default function Navbar(){




	return (<div>

<button>A-Z</button>
<button>Z-A</button>
<Combobox
  data={[ "Antarctica", "Europe", "Oceania","Africa","Asia","North America","South America"]}
  placeholder="Search for a continent"
/>
<Combobox
  data={[ ]}
  placeholder="Search for a type of activity"
/>
	 </div> )
}