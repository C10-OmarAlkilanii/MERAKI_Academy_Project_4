import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { userContext } from '../../App';

const Register = () => {
    const { setIsLogin } = useContext(userContext);
    const navigate = useNavigate();

    const [registerMsg, setRegisterMsg] = useState('');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        country: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const saveData = () => {
        axios.post("http://localhost:5000/users/register", formData)
            .then((res) => {
                setRegisterMsg(res.data.message);
                setIsLogin(true);
                navigate("/users/login");
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h2 className='card-title text-center'>Register</h2>
                            <input type='text' className='form-control mb-3' placeholder='First Name' name='firstName' value={formData.firstName} onChange={handleChange} />
                            <input type='text' className='form-control mb-3' placeholder='Last Name' name='lastName' value={formData.lastName} onChange={handleChange} />
                            <input type='number' className='form-control mb-3' placeholder='Age' name='age' value={formData.age} onChange={handleChange} />
                            <input type='text' className='form-control mb-3' placeholder='Country' name='country' value={formData.country} onChange={handleChange} />
                            <input type='email' className='form-control mb-3' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                            <input type='password' className='form-control mb-3' placeholder='Password' name='password' value={formData.password} onChange={handleChange} />
                            <button className='btn btn-primary w-100' onClick={saveData}>Register</button>
                            <div className='mt-3 text-center'>
                                {registerMsg && <p>{registerMsg}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;