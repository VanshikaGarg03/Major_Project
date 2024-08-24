import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`/api/products/${id}`);
            setProduct(response.data);
        };
        fetchProduct();
    }, [id]);

    const addToCart = () => {
        // Implement add to cart logic
        alert('Product added to cart');
    };

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Product;
