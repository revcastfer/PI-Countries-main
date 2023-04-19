const initialState={countries:[],};


const countriesReducer=(state=initialState,action)=>{

	switch(action.type){
	case 'RECIVE_DATA':
		return {...state,countries:action.payload}


	default: 
		return {...state}








	}
	


}


export default countriesReducer