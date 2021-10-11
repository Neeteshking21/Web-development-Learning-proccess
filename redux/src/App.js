import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {logIn, logOut} from './action'


const App = () => {
  const counter = useSelector(state=>state.counterReducer)
  const logged = useSelector(state=>state.loggedReducer)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>{counter}</h1>
      {logged ?
       <h3>Valueable Information</h3>
       :
       <mark>You are not logged in</mark>
       }
       <button onClick={()=>dispatch(logIn())} >Log In</button>
       <button onClick={()=>dispatch(logOut())}>Log Out</button>
      
      <form action="/" method="POST">
        <input type="text" placeholder="Name"/>
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <input type="checkbox" /> 
        <input type="radio" />
      </form>
    </div>
  )
}

export default App