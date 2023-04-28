const initialState={countries:[] , islogin: false,countriesFilter:[],continent:"all",page:1 };


const countriesReducer=(state=initialState,action)=>{

	switch(action.type){
	case 'RECIVE_DATA':
		return {...state,countries:action.payload,countriesFilter:action.payload}

	case 'LOGIN':
		return {...state,islogin:true}

	case 'LOGOUT':
		return {...state,islogin:false}

    case 'A_Z':
   	let dataA= state.countries.sort((x, y) => x.name.localeCompare(y.name))
		return {...state,countriesFilter:dataA}

	case 'Z_A':
	let dataZ= state.countries.sort((x, y) => y.name.localeCompare(x.name))
		return {...state,countriesFilter:dataZ}

	case 'SET_DATA_FILTER':
		return {...state,countriesFilter:action.payload}

	case 'SET_CONTINENT':
		return {...state,continent:action.payload}

	case 'SET_PAGE':
		return {...state,page:action.payload}

	default: 
		return {...state}








	}
	


}


export default countriesReducer