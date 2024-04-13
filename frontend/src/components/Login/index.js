import React from 'react'
import Navbar from '../Navbar';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect ,useContext} from "react";
import { userContext } from '../../App';


export const Login = () => {

    const {isLogin , setIsLogin,token,setToken} = useContext(userContext)
    const navigate = useNavigate();

    const checkData = ()=>{
        axios.post("http://localhost:5000/users/login",{email, password}).then((res)=>{
            console.log(res.data);
            setIsLogin(true);
            setToken(res.data.token)
            localStorage.setItem("token",res.data.token)
            navigate("/");
        }
   
        ).catch((err)=>{
            if(err) throw err.message
        })
    }


    //usetStates Set
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    //setsFunction
    const setMail=(e)=>{setEmail(e.target.value)}
    const setPass=(e)=>{setPassword(e.target.value)}

  return (
    <div>
        

        <input type='email' placeholder='Email' onChange={setMail}/>
        <br/>
        <input type = 'password' placeholder='Password' onChange={setPass}/>
        <br/>

        <button onClick={checkData}>Login</button>

    </div>
  )
}

export default Login;