import {ADD_CONTENT, ADD_FAVOURITE, COUNT_STARS, DELETE_COURSE, REMOVE_FAVOURITE, GET_AUTHOR, GET_COURSES} from '../../actions'
export const initialCourseState = {
    courses: [],
    authors: [],
    author: [],
    favCourses: [],
    stars: []
  }

const CourseReducer= (state=initialCourseState, action)=>{
    switch(action.type){
          case ADD_CONTENT: 
            return {
              ...state, courses: action.payload
            }  
            case ADD_FAVOURITE: return{
              ...state, favCourses: action.payload
            } 
            case REMOVE_FAVOURITE: return {
              ...state, favCourses:state.favCourses.filter(fav =>fav.id !== action.payload)
            }
            case COUNT_STARS: return {
              ...state, stars: action.payload
            }
            case GET_COURSES: return {
              ...state, courses: action.payload
            }
            case DELETE_COURSE: return {
              ...state, courses: state.courses.filter(course => course.id !== action.payload)
            }
            case GET_AUTHOR: return {
              ...state, author:action.payload
            }
         default:
           return state
  }
}      
export default CourseReducer


