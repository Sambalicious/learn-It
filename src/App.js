import React, { useReducer, lazy,Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';
const Courses = lazy(()=>import ('./components/CoursesComponent/Courses'));
const InstructorsDashBoard  = lazy(()=>import ('./components/DashBoardComponent/InstructorsDashBoard'));
const CannotAccessPage = lazy(()=>import ('./components/DashBoardComponent/CannotAccessPage'));
const LandingPage = lazy(()=>import('./components/LandingPage/LandingPage'));
const StudentDashBoard = lazy(()=>import('./components/DashBoardComponent/StudentsDashBoard'));




export const GlobalContext = React.createContext();

function App() {

  const InitialState = {
    authDetails: [],
    courses : [],
    isLoggedIn : false
  }
  
  const reducer = (state, action)=>{
    switch (action.type) {
      case 'LOG_IN': return{
        ...state, authDetails: action.payload,
        isLoggedIn: true
        
      }
        case 'ADD_CONTENT': return {
           courses: [...state.courses, action.payload]
        }      
    
      default: return state
      
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
    dispatch({
      type: 'ADD_CONTENT',
      payload: details
      
    })
}
const [state, dispatch] = useReducer(reducer, InitialState)
  
  return (
    <div >
    <GlobalContext.Provider value={{state,dispatch, handleLogin, handleAddContent}}>
     <Router>
         <Navbar />
       <Switch>   
       <Suspense fallback={<div className='my-48 h-48 spinner'></div>}>
         <Route path='/denied' exact component={CannotAccessPage} />        
         <Route path='/' exact component={LandingPage} />
         <Route path='/instructor' exact  render={()=> state.isLoggedIn ?  (<InstructorsDashBoard />) :  (<CannotAccessPage/>)}/>
         <Route path='/student' exact  render={()=> state.isLoggedIn ?  (<StudentDashBoard />) :  (<CannotAccessPage/>)}/>
         <Route path='/courses' exact component={Courses} />
        
        </Suspense>
       </Switch>
       <FooterPage />
     </Router>
     </GlobalContext.Provider>
    </div>
  );
}

export default App;
