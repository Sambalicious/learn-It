import {useReducer} from 'react';
import addFavReducer,{initialState}  from '../../reducers/addFavourite';
import {ADD_FAVOURITE, REMOVE_FAVOURITE} from '../../actions';




export default () =>{
    const [state,dispatch] = useReducer(addFavReducer, initialState);
    const handleFavourite = data => dispatch({type:ADD_FAVOURITE, payload: data });
    const removeFavourite = data=> dispatch({type:REMOVE_FAVOURITE, id: data})
    return {
        ...state,
         handleFavourite,
         removeFavourite
    }
}


