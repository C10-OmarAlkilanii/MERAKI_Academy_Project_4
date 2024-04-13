import React from 'react'
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import  { useState , createContext } from "react";
import Register from "./components/Register"
import Com404 from "./components/Com404"
import Login from './components/Login';
import Dashbord from "./components/Dashbord"
import Navbar from './components/Navbar';
export const userContext = createContext ()

const App = () => {
  const [user,setUser] = useState(null);
  const [isLogin,setIsLogin] = useState(false);
  const [token,setToken] = useState(localStorage.getItem("token"));

  return (
    <userContext.Provider value={{isLogin , setIsLogin ,token,setToken }}>
   <div className="App">
    
     {/* Nav Here from login  */}
     <Navbar />
        <br/>

      <Routes>
      <Route path = "/" element = {<Dashbord />}/>

        <Route path="/users/register" element={<Register/>}/>
        
        <Route path = "/users/login" element= {<Login />}/>

        <Route path='*' element={<Com404/>}/>
      </Routes>
    </div>
    </userContext.Provider>
  )
}

export default App
