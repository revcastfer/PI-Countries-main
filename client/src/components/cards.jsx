import Card from './card.jsx'


export default function Cards(data){

	return(<div>
{data.map(pais=><Card flag={pais.flag} name={pais.name} continent={pais.continent}/>  )}
		</div>)
}