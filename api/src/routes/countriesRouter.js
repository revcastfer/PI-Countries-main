const {Router}= require('express');

const {getCountriesHandler,getCountriyByParamsHandler} =require('../handlers/countrieshandlers.js')

countriesRouter=Router();



countriesRouter.get('/',getCountriesHandler);
countriesRouter.get('/:ID',getCountriyByParamsHandler);


module.exports=countriesRouter