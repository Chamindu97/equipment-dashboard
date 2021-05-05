//Data receiving states
export const GET_DATA = "GET_DATA";
export const LOADING_DATA = "LOADING_DATA";
export const DATA_LOADED = "DATA_LOADED";

//Data actions
export const UPDATE_VALUE = "UPDATE_VALUE";

//Page actions
export const UPDATE_PAGE = "UPDATE_PAGE";
export const RESET_PAGE = "RESET_PAGE";

export var limit = false;

export async function getdata (dispatch, max, last){
		dispatch({
			type: LOADING_DATA
		})
						
		await fetch(`/ivivdata/?max=${max}&last=${last}`)
			.then(res => res.json())
			.then(data => {
				if(!Object.keys(data).length){
					limit = true; 	
				}
				dispatch({
					type: GET_DATA,
					payload: data
				})
			})
			.catch(err => console.log(err))
	}

export function dataLoaded (dispatch) {
	dispatch({
		type: DATA_LOADED
	})
}