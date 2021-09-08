import React, {useState} from 'react'
import './App.css';
import Axios from 'axios'
import {Link} from 'react-router-dom'
function App() {
  const [username,setusername] = useState('')
  const [password,setpassword] = useState('')
  const Login = () => {
    Axios.post('http://localhost:3001/logging', {
      username:username,
      password: password
    })
  }
  return (
    <div className="App">
      <label>username</label>
        <input type='text' onChange={
          (event) => {
            setusername( event.target.value )
          }
        }/>
        <label>haslo</label>
      <input type='password' onChange={
       (event) =>{
         setpassword( event.target.value )
       } 
      }/>
      <button onClick={Login}>Login</button>
    </div>
  );
}
