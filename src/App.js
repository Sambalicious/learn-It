import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';

function App() {
  return (
    <div >
    
     <Router>
         
       <Switch>   
         <Route path='/' exact component={LandingPage} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
