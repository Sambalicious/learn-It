import React, { useReducer, useEffect, lazy,Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';
const NotFound = lazy(()=> import('./components/OtherPages/NotFound'));
const Courses = lazy(()=>import ('./components/CoursesComponent/Courses'));
const InstructorsDashBoard  = lazy(()=>import ('./components/DashBoardComponent/Instructors/InstructorsDashBoard'));
const CannotAccessPage = lazy(()=>import ('./components/DashBoardComponent/CannotAccessPage'));
const LandingPage = lazy(()=>import('./components/LandingPage/LandingPage'));
const StudentDashBoard = lazy(()=>import('./components/DashBoardComponent/studentDashBoard/StudentsDashBoard'));



export const GlobalContext = React.createContext();


function App() {
        
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
       
  useEffect(()=>{
    let local = JSON.parse(localStorage.getItem('favouriteCourses')) || {};
    
    console.log(local, 'ist render')

  }, [])
    useEffect(()=>{
      localStorage.setItem('favouriteCourses',JSON.stringify(course))
      console.log('2nd render')
    })


    /*
    ******This also works ******
    
    useEffect(()=> {
     const data = localStorage.getItem('Fav');
      dispatch(JSON.parse(data))
      console.log('first', data)
    }, [])
    useEffect(()=>{
    localStorage.setItem('Fav', JSON.stringify(courses))
      console.log('2nd render')
    })
*/
    
  
  return (
    <div >
    <GlobalContext.Provider value={{state,course, setCourse,  dispatch,handleAddContent, handleLogin}}>
     <Router>
         <Navbar />
       <Switch>   
       <Suspense fallback={<div className='flex justify-center my-40 spinner'></div>}>
              <Route path='/' exact component={LandingPage} />
              <Route path='/denied' exact component={CannotAccessPage} />  
              <Route path='/courses' exact component={Courses} />
              <Route path='/instructor' exact  render={()=> state.isLoggedIn ?  (<InstructorsDashBoard />) :  (<CannotAccessPage/>)}/>
              <Route path='/student' exact  render={()=> state.isLoggedIn ?  (<StudentDashBoard />) :  (<CannotAccessPage/>)}/>
              <Route path="/not-found" component={NotFound} />
       </Suspense>
        </Switch>
       <FooterPage />
     </Router>
     </GlobalContext.Provider>
    </div>
  );
}

export default App;