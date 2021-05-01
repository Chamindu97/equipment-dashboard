import {GET_DATA, LOADING_DATA, DATA_LOADED} from '../Actions/Actions';
import {combineReducers} from 'redux';

const initstate = {
    isLoading: null,
    data: []
}

const Reducer = (state = initstate, action) => {

    const {type, payload} = action;

    switch(type) {
        case LOADING_DATA:
            return {
                ...state,
                isLoading: true
            }   

        case GET_DATA:
            return {
                ...state,
                data: [...state.data, ...payload],
            }

        case DATA_LOADED:
            return {
                ...state,
                isLoading: false
            }

        default: 
            return state;
    }
    
}

const rootReducer =  combineReducers({
     Reducer: Reducer,
});

export default rootReducer;