const {getCountriesController,getCountriesByID}=require('../controllers/controllers.js');

const getCountriesHandler=async(req,res)=>{


try{ const data=await getCountriesController(req.query.name);
res.status(200).json(data) }
catch (error){res.status(501).send(error)}
}

const getCountriyByParamsHandler=async(req,res)=>{


try{ const data=await getCountriesByID(req.params.ID);
res.status(200).json(data) }
catch (error){res.status(501).send(error)}
}


module.exports={getCountriesHandler,getCountriyByParamsHandler}