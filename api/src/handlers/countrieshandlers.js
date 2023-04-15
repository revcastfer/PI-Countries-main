const {getCountriesController,getCountriesByID}=require('../controllers/countryControllers.js');

const getCountriesHandler=async(req,res)=>{


try{ const data=await getCountriesController(req.query.name);
res.status(200).json(data) }
catch (error){res.status(501).send(error.msg)}
}

const getCountriyByParamsHandler=async(req,res)=>{


try{ const data=await getCountriesByID(req.params.ID);
res.status(200).json(data) }
catch (error){res.status(501).json(error)}
}


module.exports={getCountriesHandler,getCountriyByParamsHandler}