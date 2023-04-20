import Combobox from "react-widgets/Combobox";
import Multiselect from "react-widgets/Combobox";
import "react-widgets/styles.css";

export default function FormActivities(){


	return(
<form>
<label>nombre</label> <input type="text"/>

<label>dificultad</label> <input type="text"/>
<label>duracion</label>  <input type="time" />
<label>temporada</label>  <input type="text" />
<div>   </div>



<button>create</button>

</form>)
}