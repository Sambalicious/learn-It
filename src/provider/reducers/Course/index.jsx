import {ADD_CONTENT} from '../../actions'
export const initialCourseState = {
    courses: []
  }

const CourseReducer= (state=initialCourseState, action)=>{
    switch(action.type){
          case ADD_CONTENT: 
            return {
              courses: [...state.courses, action.payload] 
            }   
         default:
           return state
  }
}      
export default CourseReducer


