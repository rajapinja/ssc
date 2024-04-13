import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import cartIcon from '../images/cart-icon-1.png';


const SkilledWorkerList = () => {
    const [workers, setWorkers] = useState([]);
    const [selectedWorkerId, setSelectedWorkerId] = useState('');

    useEffect(() => {
        fetchWorkers();
    }, []);

    const fetchWorkers = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/skilledworker`);
            setWorkers(response.data.skilledworkers);
        } catch (error) {
            console.error('Error fetching workers:', error);
        }
    };

    const handleAddToCart = async (workerId) => {
        try {
            await axios.put(`${BASE_URL}/api/skilledworker/cart`, { worker_id: workerId, cart_count: 1 });
            // Optionally, you can update the state or show a success message
        } catch (error) {
            console.error('Error adding worker to cart:', error);
        }
    };

    return (
        <div className="container">
            <div className="header">
            <div className='formBorder'>
                <div className="title">
                    <h5 style={{textAlign:'center'}}>Skilled Workers</h5>
                </div>
               
                    <form className="dropdown-form" onSubmit={handleAddToCart}>
                        {/* <label htmlFor="worker">Select Worker:</label> */}
                        <select id="worker" value={selectedWorkerId} onChange={(e) => setSelectedWorkerId(e.target.value)} style={{ height: '44px', width: '400px' }}>
                            <option value="">Select a worker</option>
                            {workers.map(worker => (
                                <option key={worker.worker_id} value={worker.worker_id}>{worker.name}</option>
                            ))}
                        </select>
                        <button type="submit">Add to Cart</button>
                    </form>
                </div>

                <table className="worker-list">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Cart Count</th>
                            <th>Add to Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workers.map(worker => (
                            <tr key={worker.worker_id}>
                                <td>{worker.name}</td>
                                <td>
                                    <img
                                        src={require('../images/cart-icon-1.png')}
                                        alt="Cart"
                                        className="cart-icon"
                                        style={{ width: '20px', height: '20px' }} // Adjust the width and height as needed

                                    />
                                    {worker.cart_count}

                                </td>
                                <td>
                                    <button onClick={() => handleAddToCart(worker.worker_id)}>
                                        Add To Cart
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SkilledWorkerList;
