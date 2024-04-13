import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import '../css/assignmentDetails.css';

const AssignmentDetailScreen = () => {
    const [assignmentDetails, setAssignmentDetails] = useState([]);

    useEffect(() => {
        const fetchAssignmentDetails = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/assignmentdetails`);
                setAssignmentDetails(response.data.assignmentdetails);
            } catch (error) {
                console.error('Error fetching assignment details:', error);
            }
        };

        fetchAssignmentDetails();
    }, []);

    return (
        <div className="container">   
         <h2 style={{ textAlign: 'center', marginBottom:'-40px' }}>Assignment Details</h2>
            <form className="assignment-form">                
                <div className="assignment-table-container">                   
                    <table className="assignment-table">
                        <thead>
                            <tr>
                                <th>Requester Name</th>
                                <th>Phone</th>
                                <th>Worker Name</th>
                                <th>Task ID</th>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Assignment ID</th>
                                <th>Created Date</th>
                                <th>Assigned Date</th>
                                <th>Completion Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {assignmentDetails.map((assignment, index) => (
                                <tr key={index}>
                                    <td>{assignment.requester}</td>
                                    <td>{assignment.phone}</td>
                                    <td>{assignment.worker_name}</td>
                                    <td>{assignment.task_id}</td>
                                    <td>{assignment.task_name}</td>
                                    <td>{assignment.status}</td>
                                    <td>{assignment.assignment_id}</td>
                                    <td>{assignment.created_date}</td>
                                    <td>{assignment.assignment_date && new Date(assignment.assignment_date).toLocaleDateString()}</td>
                                    <td>{assignment.completion_date && new Date(assignment.completion_date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </form>
        </div>
    );
};

export default AssignmentDetailScreen;
