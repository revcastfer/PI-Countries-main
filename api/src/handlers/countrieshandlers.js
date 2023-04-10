const getCountriesController=require('../controllers/controllers.js');

const getCountriesHandler=async(req,res)=>{


try{ const data=await getCountriesController(req.query.name);
res.status(200).json(data) }
catch (error){res.status(500).send(error)}
}




module.exports=getCountriesHandler