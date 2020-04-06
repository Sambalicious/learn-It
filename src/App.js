import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';
import DashBoard from './components/DashBoardComponent/DashBoard';

function App() {
  return (
    <div >
    
     <Router>
         
       <Switch>   
         <Route path='/' exact component={LandingPage} />
         <Route path='/dashboard'  exact component={DashBoard} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
