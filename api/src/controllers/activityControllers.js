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


module.exports={postActivityController,getActivitiesController}