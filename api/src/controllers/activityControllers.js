const {Country,Activity}= require('../db.js');

const postActivityController=async(nombre,dificultad,duracion,temporada,paises)=>{
console.log(paises);


let newActivity=await Activity.create({name:nombre,dificulty:dificultad,duration:duracion,season:temporada});

let arrayPaises=paises.split(",");console.log(arrayPaises);
console.log(arrayPaises);
arrayPaises.forEach( async pais=>{
    let finder = await Country.findOne({where:{name:pais}});
    console.log(finder);
    newActivity.addCountry(finder)
})




}




const  getActivitiesController=async()=>{
const activities=await Activity.findAll();
return activities
}


module.exports={postActivityController,getActivitiesController}