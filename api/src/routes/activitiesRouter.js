const {Router}=require ('express');

let activitiesRouter=Router();

const {postActivityHandler,getActivityHandler}=require('../handlers/activitiesHandler.js');


activitiesRouter.post('/', postActivityHandler);
activitiesRouter.get('/', getActivityHandler);

module.exports=activitiesRouter