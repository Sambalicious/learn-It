import React, { useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import DashBoard from './components/DashBoardComponent/DashBoard';

export const GlobalContext = React.createContext();

function App() {
  const InitialState = {
    authDetails: ''
  }
  const reducer = (state, action)=>{
    switch (action.type) {
      case 'LOG_IN': return{
        ...state, authDetails: action.payload
      }
        case 'LOG_OUT': return state
       
        
    
      default: return state
        break;
    }
  }
  const handleLogin= (response) => {
      navigator.vibrate(200);
      dispatch({
        type: 'LOG_IN',
        payload: response
      })
  }
  const handleLogOut= () => {
    navigator.vibrate(200);
    dispatch({
      type: 'LOG_OUT',
      
    })
}
const [state, dispatch] = useReducer(reducer, InitialState)
  
  return (
    <div >
    <GlobalContext.Provider value={{state,dispatch, handleLogin, handleLogOut}}>
     <Router>
         
       <Switch>   
         <Route path='/' exact component={LandingPage} />
         <Route path='/dashboard'  exact component={DashBoard} />
       </Switch>
     </Router>
     </GlobalContext.Provider>
    </div>
  );
}

export default App;
