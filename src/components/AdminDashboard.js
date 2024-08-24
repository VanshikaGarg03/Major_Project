import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        };
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const addProduct = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/products', newProduct);
            alert('Product added successfully');
        } catch (error) {
            alert('Error adding product');
        }
    };

    return (
        <div>
            <h2>Admin Dashboard</h2>
            <form onSubmit={addProduct}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={newProduct.name}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Add Product</button>
            </form>
            <h3>Products</h3>
            <div>
                {products.map(product => (
                    <div key={product._id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminDashboard;
