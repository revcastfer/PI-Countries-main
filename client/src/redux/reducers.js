const initialState={countries:[] , islogin: false,countriesFilter:[] };


const countriesReducer=(state=initialState,action)=>{

	switch(action.type){
	case 'RECIVE_DATA':
		return {...state,countries:action.payload}

	case 'LOGIN':
		return {...state,islogin:true}

	case 'LOGOUT':
		return {...state,islogin:false}

   case 'A_Z':
   	let dataA= state.countries.sort((x, y) => x.name.localeCompare(y.name))
		return {...state,countries:dataA}

	case 'Z_A':
	let dataZ= state.countries.sort((x, y) => y.name.localeCompare(x.name))
		return {...state,countries:dataZ}

	default: 
		return {...state}








	}
	


}


export default countriesReducer