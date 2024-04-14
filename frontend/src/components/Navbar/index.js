import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../App';

export default function Navbar() {

  const {isLogin , setIsLogin,setToken} = useContext(userContext)

  const logoutFun=()=>{
    localStorage.clear();
    setToken(null);
    setIsLogin(false);
  }

  

  return (
    <div>
      {isLogin? <>
        <Link to="/category" >Dashbord || </Link>
        <Link to="/cart">Carts || </Link>
        <Link to="/users/login" onClick={logoutFun}>Logout</Link>
        </> : <>
        <Link to={"/users/register"} >Register || </Link>
        <Link to={"/users/login"}>Login</Link>
        </>
      }
      
    </div>
  )
}
