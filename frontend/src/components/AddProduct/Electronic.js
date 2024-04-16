import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../../App';

const Electronic = () => {
    const { isLogin, setIsLogin, token, setToken } = useContext(userContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/product/Electronics', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((result) => {
            setProducts(result.data.category.map((product, index) => {
                return (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                            <img src={product.img} className="card-img-top" alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                            </div>
                        </div>
                    </div>
                );
            }));
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products}
            </div>
        </div>
    );
}

export default Electronic;
