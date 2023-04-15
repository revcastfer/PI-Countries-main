


export default function Card(flag,name,continent){
	return(
		<div>
			<img src={flag}  alt={`bandera de ${name}`}/>
			<span>{name}</span>
			<span>{continent}</span>
		</div>


		)
}