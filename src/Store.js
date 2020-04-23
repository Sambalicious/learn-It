import React, {useReducer} from 'react'
import App from './App';


export const GlobalContext = React.createContext();

const Store = () => {

    const initialCourseState ={
        courses: []
      }
     const InitialState = {
       authDetails: [],
       
       isLoggedIn : false
     }
     
     const reducer = (state, action)=>{
       switch (action.type) {
         case 'LOG_IN': return{
           ...state, authDetails: action.payload,
           isLoggedIn: true
           
         }
    
                     
         default: return state
         
       }
     }
    
     const courseReducer= (state, action)=>{
       switch(action.type){
         case 'ADD_CONTENT': return {
           courses: [...state.courses, action.payload] 
        }   
        default:return state
       }
     }
    
     const handleLogin= (response) => {
         navigator.vibrate(200);
         dispatch({
           type: 'LOG_IN',
           payload: response,
           
         })
     }
    
    
     const handleAddContent= (details) => {
       navigator.vibrate(200);
       setCourse({
         type: 'ADD_CONTENT',
         payload: details
       })
    
    };
    
       const [state, dispatch] = useReducer(reducer,InitialState)
          const [course,setCourse] = useReducer(courseReducer, initialCourseState)
     
       var local = JSON.parse(localStorage.getItem('favouriteCourses')) || {};
    
       local[course] = 'newValue'
    
       localStorage.setItem('favouriteCourses',JSON.stringify(course))
    
       /*
    
       -------OR------- this also works
       
       useEffect(()=> {
        const data = localStorage.getItem('Fav');
         dispatch(JSON.parse(data))
         console.log('first', data)
    
       }, [])
    
       useEffect(()=>{
       localStorage.setItem('Fav', JSON.stringify(course))
         console.log('2nd render')
       })
    */
       
    return ( 
        <div>
                <GlobalContext.Provider value={{state, dispatch, course, handleAddContent, handleLogin}}>
                  
                </GlobalContext.Provider>
        </div>
      );
}
 
export default Store;



