 const {postActivityController,getActivitiesController}=require('../controllers/activityControllers.js');

 const postActivityHandler=async(req,res)=>{
 
let {nombre,dificultad,duracion,temporada,paises}=req.body;
try{
 await postActivityController(nombre,dificultad,duracion,temporada,paises);
res.status(200).json(nombre,dificultad,duracion,temporada,paises) }
catch(error){res.status(500).send(error)}

 };


 const getActivityHandler=async(req,res)=>{
try {let data=await getActivitiesController();
res.status(200).json(data)

}
catch(error){res.status(501).send(error)}

}
 module.exports={postActivityHandler,getActivityHandler}