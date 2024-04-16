import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../App';
const Electronic = () => {
    const { isLogin, setIsLogin, token, setToken } = useContext(userContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/product/Electronic',{
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
            .then((result) => {                
                  setProducts(result.data.category.map((product, index) => {
                    return (
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
                                <p>{product.title}</p>
                                <img src={product.img} style={{ maxWidth: "100%", height: "auto" }} /> 
                            </div>
                    );
                
              }));
            })
            .catch((err) => {
               console.log(err.message);
            });
    }, []);

    return (
        <div>
           {products}
        </div>
    );

}

export default Electronic