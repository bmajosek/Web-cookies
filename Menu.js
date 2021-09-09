import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from './Login.js'
import Rejestracja from './Rejestracja.js'
// import Profile from './Profile.js'
function Menu() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/Rejestracja' component={Rejestracja}/>
                    {/* <Route exact path='/Profile' component={Profile}/> */}
                </Switch>
            </div>
        </Router>
    )
}

export default Menu
