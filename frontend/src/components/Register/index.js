import React from 'react'

import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import { useState,useEffect ,useContext} from "react";
import { userContext } from '../../App';
export const Register = () => {
    const {isLogin , setIsLogin} = useContext(userContext)

    const navigate = useNavigate();

    const [registerMsg,setRegisterMsg] = useState('');

    const saveData = ()=>{
        axios.post("http://localhost:5000/users/register",{firstName, lastName, email, password, age, country}).then((res)=>{
            console.log(res.data);
            setRegisterMsg(res.data.message);
            setIsLogin (true);
            navigate("/users/login")
        }
    
        ).catch((err)=>{
            console.log(err.message);
        })
    }

    //Inputs set value
    const [firstName,setfname_s] = useState(null);
    const [lastName,setLName_s] = useState(null);
    const [age,setAge_s] = useState(null);
    const [country,setCountry_s] = useState(null);
    const [email,setEmail_s] = useState(null);
    const [password,setPassword_s] = useState(null);

    //Set Functions
    const setfName=(e)=>{setfname_s(e.target.value)}
    const setLname=(e)=>{setLName_s(e.target.value)}
    const setAge=(e)=>{setAge_s(e.target.value)}
    const setCountry=(e)=>{setCountry_s(e.target.value)}
    const setEmail=(e)=>{setEmail_s(e.target.value)}
    const setPassword=(e)=>{setPassword_s(e.target.value)}


  return (
    <div>
        {/* inpurts and button */}

        <input type='text' placeholder='First Name' onChange={setfName}/><br/>
        <input type='text' placeholder='Last Name' onChange={setLname}/><br/>
        <input type='number' placeholder='Age' onChange={setAge}/><br/>
        <input type='text' placeholder='Country' onChange={setCountry}/><br/>
        <input type='email' placeholder='Email' onChange={setEmail}/><br/>
        <input type='password' placeholder='Password' onChange={setPassword}/><br/>
        <button onClick={saveData}>Register</button><br/> 

        {/* Empty Dev show message of account status */}
        <div>
            {registerMsg}
        </div>

    </div>
    )
};

export default Register;
