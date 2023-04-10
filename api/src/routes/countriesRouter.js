const {Router}= require('express');

const getCountriesHandler =require('../handlers/countrieshandlers.js')

countriesRouter=Router();



countriesRouter.get('/',getCountriesHandler);


module.exports=countriesRouter