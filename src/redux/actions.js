import { ADD_ELEMENT } from './actiontypes';

const addElement = (element) => {
    return {
        type : ADD_ELEMENT,
        payload: element
    }
}

export { addElement };