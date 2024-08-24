import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <a href={`/product/${product._id}`}>View Product</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
