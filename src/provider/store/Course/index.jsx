import {useReducer} from 'react'

import courseReducer, { initialCourseState } from '../../reducers/Course'
import { ADD_CONTENT } from '../../actions';


export default () => {
    const [state, dispatch] = useReducer(courseReducer, initialCourseState);
    const handleAddCourseToFav = data => dispatch({type:ADD_CONTENT, payload: data })
    return {
        ...state,
        dispatch,
        handleAddCourseToFav
    }
}