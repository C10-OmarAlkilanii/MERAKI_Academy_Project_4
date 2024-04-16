import React, { useState, useContext } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const Login = () => {
    const { setIsLogin, setToken } = useContext(userContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkData = () => {
        axios.post("http://localhost:5000/users/login", { email, password })
            .then((res) => {
                setIsLogin(true);
                setToken(res.data.token);
                localStorage.setItem("token", res.data.token);
                navigate("/");
            })
            .catch((err) => {
                if (err) throw err.message;
            });
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title text-center'>Login</h2>
                            <input type='email' className='form-control mb-3' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type='password' className='form-control mb-3' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <button className='btn btn-primary w-100' onClick={checkData}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
