import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import AssignmentStatusPicker from '../components/AssignmentStatusPicker';
import '../css/AssignmentStatusUpdateScreen.css';

function AssignmentStatusUpdateScreen() {
  const [assignmentIds, setAssignmentIds] = useState([]);
  const [selectedAssignmentId, setSelectedAssignmentId] = useState('');
  const [taskName, setTaskName] = useState('');
  const [taskId, setTaskId] = useState('');
  const [status, setStatus] = useState('');
  const [newStatus, setNewStatus] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  // Fetch assignment IDs from backend
  useEffect(() => {
    async function fetchAssignmentIds() {
      try {
        const response = await axios.get(`${BASE_URL}/api/assignment-ids`);
        setAssignmentIds(response.data.assignmentIds);
      } catch (error) {
        console.error('Error fetching assignment IDs:', error);
      }
    }
    fetchAssignmentIds();
  }, []);

  // Fetch task details when assignment ID changes
  useEffect(() => {
    async function fetchTaskDetails() {
      try {
        const response = await axios.get(`${BASE_URL}/api/task-details/${selectedAssignmentId}`);
        const { task_name, task_id, status } = response.data;
        setTaskName(task_name);
        setTaskId(task_id);
        setStatus(status);
        setNewStatus(status); // Pre-select current status in dropdown
      } catch (error) {
        console.error('Error fetching task details:', error);
      }
    }
    if (selectedAssignmentId) {
      fetchTaskDetails();
    }
  }, [selectedAssignmentId]);

  const handleStatusChange = (newValue) => {
    setSelectedStatus(newValue); 
    setNewStatus(newValue.value)
  };

  // Handle status update
  const handleStatusUpdate = async (e) => {
    e.preventDefault();

    console.log("task_id :", taskId);
    console.log("newStatus :",newStatus);

    try {
      const response = axios.put(`${BASE_URL}/api/update-status/${taskId}`, { status: newStatus });
      console.log('workflows:', response.data.message); 
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className="container">     
      <form onSubmit={handleStatusUpdate} className="form">
        <h4 style={{textAlign:'center'}}> Assignment Status Update</h4>
        <div className="form-group">
          {/* <label htmlFor="assignmentId">Assignment ID:</label> */}
          <select id="assignmentId" value={selectedAssignmentId} onChange={(e) => setSelectedAssignmentId(e.target.value)} className="select">
            <option value="">Select Assignment ID</option>
            {assignmentIds.map((id) => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Task Name:</label>
          <span>{taskName}</span>
        </div>
        <div className="form-group">
          <label>Task ID:</label>
          <span>{taskId}</span>
        </div>
        <div className="form-group">
          <label>Current Status:</label>
          <span>{status}</span>
        </div>
        <div className="form-group">
          <AssignmentStatusPicker
            selectedValue={selectedStatus}
            onChange={handleStatusChange}
            className="select"
            name="status"           
          />
        </div>
        <button type="submit" className="button">Update Status</button>
      </form>
    </div>
  );
}

export default AssignmentStatusUpdateScreen;
