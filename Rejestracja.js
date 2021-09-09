import React,{useState} from 'react'
import Axios from 'axios'
import './App.css';
import {Link} from 'react-router-dom'
function Rejestracja() {
    const [usernamer,setusernamer] = useState('')
    const [passwordr,setpasswordr] = useState('')
    const Rejestr = () =>{
        Axios.post('http://localhost:3001/rejestr',{
          usernamer: usernamer,
          passwordr: passwordr
        })
      }
    return (
        <div className='App'>
            <label>username</label>
      <input type='text' onChange={
        (event) =>{
          setusernamer(event.target.value)
        }
      }/>
      <label>Haslo</label>
      <input type='password' onChange={
        (event) =>{
          setpasswordr(event.target.value)
        }
      }/>
      <button onClick={Rejestr}>Zarejestruj</button>
      <Link to={'/'}>Login</Link>
        </div>
    )
}

export default Rejestracja
