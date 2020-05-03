import React, { lazy,Suspense, useContext , useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';
import { StoreContext } from './provider/store';

const NotFound = lazy(()=> import('./components/OtherPages/NotFound'));
const Courses = lazy(()=>import ('./components/CoursesComponent/Courses'));
const InstructorsDashBoard  = lazy(()=>import ('./components/DashBoardComponent/Instructors/InstructorsDashBoard'));
const StudentDashBoard  = lazy(()=>import ('./components/DashBoardComponent/studentDashBoard/StudentsDashBoard'));
const CannotAccessPage = lazy(()=>import ('./components/DashBoardComponent/CannotAccessPage'));
const LandingPage = lazy(()=>import('./components/LandingPage/LandingPage'));



function App() {

  const {auth} = useContext(StoreContext)
  const {isLoggedIn} = auth

 /*

useEffect(()=> {
  const data = localStorage.getItem('Fav');
  try{
   // handleAddCourseToFav(JSON.parse(data))
    console.log('first', data)
  }catch(e){

  }
 }, [])
 useEffect(()=>{
 localStorage.setItem('Fav', JSON.stringify(courses.courses))
   console.log('2nd render')
 })
 */
  return (
    <div >
    
     <Router>
         <Navbar />
       <Switch>   
       <Suspense fallback={<div className='flex justify-center my-40 spinner'></div>}>
              <Route path='/' exact component={LandingPage} />
              <Route path='/denied' exact component={CannotAccessPage} />  
              <Route path='/courses' exact component={Courses} />
              <Route path='/instructor' exact  render={()=> isLoggedIn ?  (<InstructorsDashBoard />) :  (<CannotAccessPage/>)}/>
              <Route path='/student' exact  render={()=> isLoggedIn?  (<StudentDashBoard />) :  (<CannotAccessPage/>)}/>
              <Route path="/not-found" component={NotFound} />
       </Suspense>
        </Switch>
       <FooterPage />
     </Router>
    </div>
  );
}

export default App;