import React, { lazy,Suspense, useContext } from 'react';
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
const EachCourses = lazy(()=>import( './components/DashBoardComponent/EachCourses'));
const InstructorProfile = lazy(()=>import('./components/DashBoardComponent/Instructors/InstructorProfile'));
const SearchCourse = lazy(()=>import('./components/CoursesComponent/SearchCourse'));


function App(props) {

  const {auth} = useContext(StoreContext)
  const {isLoggedIn} = auth

  return (
    <div >
    
     <Router>
         <Navbar />
       <Switch>   
       <Suspense fallback={<div className='flex justify-center my-40 md:my-64 spinner'></div>}>
                          
              <Route path='/courses/:id'  component={EachCourses} />
              <Route path='/courses' exact render={props=> <Courses {...props} />} />
              <Route path='/search'  component={SearchCourse} />
              <Route path="/instructor/create"  render={props=> isLoggedIn ? <InstructorProfile {...props} /> : <CannotAccessPage />} />
              <Suspense fallback={<div className='flex justify-center my-40 md:my-64 spinner'></div>}>
              <Route path='/instructor' exact  render={props=> isLoggedIn ?  (<InstructorsDashBoard {...props} />) :  (<CannotAccessPage/>)}/>
              </Suspense>
              <Suspense fallback={<div className='flex justify-center my-40 md:my-64 spinner'></div>}>
              <Route path='/student'   render={(props)=> isLoggedIn?  (<StudentDashBoard {...props} />) :  (<CannotAccessPage/>)}/>
              </Suspense>
              <Route path='/' exact component={LandingPage} />
              <Route path='/denied'  component={CannotAccessPage} />  
              <Route path="/not-found" component={NotFound} />
       </Suspense>
        </Switch>
       <FooterPage />
     </Router>
    </div>
  );
}

export default App;