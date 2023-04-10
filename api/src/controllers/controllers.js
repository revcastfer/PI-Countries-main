const {Country,Activity}= require('../db.js');



const  getCountriesController=async(name)=>{

if(name){
	

	const countries = await Country.findAll();
	const countryFiltered=[];
	countries.map(country=>{if(country.name.toLowerCase()==name.toLowerCase()){countryFiltered.push(country)}});
	
	if(countryFiltered.length>0){return countryFiltered}
		else{throw new Error('no se encontro el pais')}	
}

else{

const countries = await Country.findAll();
return countries}
}


module.exports=getCountriesController