import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51HPvXCJJ5fdTIHPctAQMl2aqFnok1lO8kh9itLvGml8GeHolpIXMnip4DUVUkoxy5VEA3DhqaM3eWeA6nNqNOsOE00ygUwh4pA"
)

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ',authUser);
      if(authUser){
        // user logged in
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
        // user logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  },[])

  return (
    <Router>
      
      <div className="app">
        <Switch>

          <Route path="/login">
              <Login/>
          </Route>

          <Route path="/orders">
              <Header/> 
              <Orders/>
          </Route>

          <Route path="/checkout"> 
            <Header/>   
            <Checkout/>
          </Route>

          <Route path="/payment"> 
            <Header/>  
            <Elements stripe={promise}>
              <Payment/>
            </Elements> 
            
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
