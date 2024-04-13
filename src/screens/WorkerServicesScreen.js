import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/WorkerServices.css';
import { BASE_URL } from '../app/Config';

function WorkerServicesScreen() {
  const [skilledWorkers, setSkilledWorkers] = useState([]);

  useEffect(() => {
    async function fetchSkilledWorkers() {
      try {
        const response = await axios.get(`${BASE_URL}/api/workerservices`);
        setSkilledWorkers(response.data.workerServices);
      } catch (error) {
        console.error('Error fetching skilled workers:', error);
      }
    }
    fetchSkilledWorkers();
  }, []);

  const handleEdit = async (workerId) => {
    // Implement edit functionality here
    // For example, you can navigate to an edit page with the workerId
    console.log(`Editing worker with ID: ${workerId}`);
  };

  const handleDelete = async (workerId) => {
    // Implement delete functionality here
    try {
      await axios.delete(`${BASE_URL}/api/workerservices/${workerId}`);
      setSkilledWorkers((prevWorkers) => prevWorkers.filter((worker) => worker.worker_id !== workerId));
      console.log(`Worker with ID ${workerId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting worker:', error);
    }
  };

  return (
    <div className="container">  
      <div className="table-container">
        <h5 style={{ textAlign: 'center' }}>Worker Services Details</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>City/Town</th>
              <th>Service</th>
              <th>Service Description</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skilledWorkers.map((worker, index) => (
              <tr key={index}>
                <td>{worker.worker_name}</td>
                <td>{worker.town}</td>
                <td>{worker.service_name}</td>
                <td>{worker.description}</td>
                <td>{worker.price}</td>
                <td>{worker.phone_number}</td>
                <td>{worker.email}</td>
                <td>
                  <button onClick={() => handleEdit(worker.worker_id)}>Edit</button>
                  <button onClick={() => handleDelete(worker.worker_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WorkerServicesScreen;
