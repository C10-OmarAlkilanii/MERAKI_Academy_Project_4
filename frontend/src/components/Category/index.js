import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { userContext } from '../../App';
import { Link } from 'react-router-dom';

const Category = () => {
    const { isLogin, setIsLogin, token, setToken } = useContext(userContext);
    const [categoryList, setCategoryList] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/category", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((result) => {
            setCategoryList(result.data.category.map((category, index) => {
                return (
                    <Link to={`/product/${category.title}`} key={index}>
                        <div style={{
                            padding: "10px",
                            border: "solid",
                            color: "blue",
                            gap: "30px",
                            margin: "50px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center" 
                        }}>
                            <p>{category.title}</p>
                            <img src={category.img} style={{ maxWidth: "100%", height: "auto" }} /> 
                        </div>
                    </Link>
                );
            }));
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div>
            {categoryList}
        </div>
    );
}

export default Category;
