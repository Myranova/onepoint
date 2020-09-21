import { ADD_ELEMENT } from './actiontypes';

const INITIAL_STATE = {
    list_element : []
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_ELEMENT:
            return { ...state, list_element : [...state.list_element, action.payload]}
        default: 
            return {...state}
    }
}

export default reducer;