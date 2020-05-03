
import {ADD_FAVOURITE, REMOVE_FAVOURITE} from '../../actions';

export const initialState ={
    data : []
}
 


const addFavouriteStore = (state = initialState, action) => {
   switch (action.type) {
       case ADD_FAVOURITE:
           
        return {
            data: [...state.data, action.payload] 
          }   
          case REMOVE_FAVOURITE: 
            return  state.filter(({id}) => id !== action.id)
            
       default:
           return state
   }
}
 
export default addFavouriteStore;