import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import Slides from './components/Home/Slides/Slides';
import Payment from './components/Payment/Payment';
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import Orders from './components/Orders/Orders';

const promise=loadStripe('pk_test_51Hqh5PBuyb9uiycGMSJOs6KdzZkIigJ5hr57kFCQuiyBjoKZZOM7AMlKh0EoDDSb9QXqZW9UZqW0OJrT0fgLzmHf00RWoI1w1h')

function App() {
  const dispatch=useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS>>>',authUser)

      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }else{
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
      <Route path='/orders'>
            <Orders/>
        </Route>

        <Route path='/login'>
            <Login/>
        </Route>

        <Route path='/slides'>
            <Slides/>
        </Route>

        <Route path='/checkout'>
           <Header/>      
          <Checkout/>
        </Route>
        <Route path='/payment'>
           <Header/>    
           <Elements stripe={promise}>
            <Payment/>            
          </Elements>  
        </Route>
        <Route path='/'>
          <Header/>
         <Home/>     
        </Route>

      </Switch>
 
    </div>
    </Router>

  );
}

export default App;
