import {ADD_CONTENT, ADD_FAVOURITE, DELETE_COURSE, REMOVE_FAVOURITE, GET_AUTHOR, GET_COURSE, GET_USER_COURSES, GET_FAVOURITES, ADD_RATING} from '../../actions'
export const initialCourseState = {
    courses: [],
    authors: [],
    author: [],
    favCourses: [],
    stars: [],
    userCourses: []
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
            case ADD_RATING: return {
              ...state, stars: action.payload
            }
            
            case GET_COURSE: return {
              ...state, courses: action.payload
            }
            case DELETE_COURSE: return {
              ...state, courses: state.courses.filter(course => course.id !== action.payload)
            }
            case GET_AUTHOR: return {
              ...state, author:action.payload
            }
            case GET_USER_COURSES: return {
              ...state, userCourses: action.payload
            }
            case GET_FAVOURITES: return {
              ...state, favCourses:action.payload
            }
         default:
           return state
  }
}      
export default CourseReducer


