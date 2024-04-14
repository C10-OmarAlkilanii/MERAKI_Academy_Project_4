import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { userContext } from '../../App';

const Category = () => {

    //useContext Area
    const {isLogin , setIsLogin,token,setToken} = useContext(userContext)
    const [categoryList,setCategoryList]=useState(null);

    
  useEffect(()=>{
    axios.get("http://localhost:5000/category",{headers: {
Authorization: `Bearer ${token}`}}).then((result)=>{
    setCategoryList(result.data.category.map((category,index)=>{
        return <div key={index} style={{padding:"10px",border:"solid", color:"blue" ,gap:"30px",margin:"50px"}}>
        <p>{category.title} </p>
        <img src={`${category.img}`}/>

      </div>
    }));

    }).catch((err)=>{
      console.log(err.message);
    });
  },[])

  return (
    <div>
      {categoryList}
    </div>
  )
}

export default Category