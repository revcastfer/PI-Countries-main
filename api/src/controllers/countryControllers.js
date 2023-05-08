const {Country,Activity}= require('../db.js');



const  getCountriesController=async(name)=>{
if(name){
	const countries = await Country.findAll();
	const countryFiltered=[];
	countries.map(country=>{if(country.name.toLowerCase()==name.toLowerCase()) {countryFiltered.push(country)}});
	
	if(countryFiltered){return countryFiltered}
		else{throw new Error({ msg: "no se encontro el pais" })}	
}

else{
const countries = await Country.findAll();
return countries}
}

 
const  getCountriesByID=async(ID)=>{

	const country= await Country.findByPk(ID.toUpperCase(),{include:Activity});
	
	if(country){return country}
		else{throw new Error({msg:'no se encontro el pais'})}	
}


const postActivityController=async(nombre,dificultad,duracion,temporada,paises)=>{

	


let newActivity=await Activity.create({name:nombre,dificulty:dificultad,duration:duracion,season:temporada});


let arrayPaises=paises.split(",");
arrayPaises.forEach( async pais=>{let finder = await Country.findOne({where:{name:pais}});
                                               newActivity.addCountry(finder)})





}


const  getActivitiesController=async()=>{
const activities=await Activity.findAll();
return activities
}


module.exports={getCountriesController,getCountriesByID,postActivityController,getActivitiesController}