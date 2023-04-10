const {Country,Activity}= require('../db.js');



const  getCountriesController=async(name)=>{
if(name){
	const countries = await Country.findAll();
	const countryFiltered=[];
	countries.map(country=>{if(country.name.toLowerCase()==name.toLowerCase()) {countryFiltered.push(country)}});
	
	if(countryFiltered.length>0){return countryFiltered}
		else{throw new Error('no se encontro el pais')}	
}

else{
const countries = await Country.findAll();
return countries}
}


const  getCountriesByID=async(ID)=>{
console.log(ID);
	const country= await Country.findByPk(ID,{include:Activity});
	console.log(country);
	if(country){return country}
		else{throw new Error('no se encontro el pais')}	
}







module.exports={getCountriesController,getCountriesByID}