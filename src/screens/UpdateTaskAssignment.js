import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import AssignmentIDPicker from '../components/AssignmentIDPicker';
import AssignmentStatusPicker from '../components/AssignmentStatusPicker';
import '../css/UpdateTaskAssignment.css'


const UpdateTaskAssingment = () => {

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedAssignmentId, setSelectedAssignmentId] = useState('');
    const [workerId, setWorkerId] = useState('');
    const [assignmentDate, setAssignmentDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [serviceDesc, setServiceDesc] = useState('');    

    const [assignmentDetails, setAssignmentDetails] = useState({
                                                                    assignment_date: null,
                                                                    assignment_id: null,
                                                                    completion_date: null,
                                                                    end_time: null,
                                                                    service_desc: '',
                                                                    start_time: null,
                                                                    status: '',
                                                                    task_id: null,
                                                                    task_name: '',
                                                                    worker_id: null
                                                                });

// Define initial state values
const initialAssignmentDetails = {
    assignment_date: '',
    assignment_id: null,
    completion_date: '',
    end_time: '',
    service_desc: '',
    start_time: '',
    status: '',
    task_id: null,
    task_name: '',
    worker_id: null
}; // Initial assignment details

const initialSelectedAssignmentId = null; // Initial selected assignment ID
// Define other initial state values as needed...

    const handleSelectChange = (newValue) => {
        console.log("handleSelectChange - newVaue of assignmentId :", newValue);        
        console.log("handleSelectChange - newVaue.label :", newValue.label);   
        setSelectedAssignmentId(newValue);  
        fetchTaskAssignmentDetails(newValue.value)     
    };

    const handleStatusChange = (newValue) => {
        console.log("handleSelectChange - newVaue of status :", newValue);        
        console.log("handleSelectChange - newVaue.label :", newValue.label);   
        setSelectedStatus(newValue);   
        
        // assignmentDetails object have all the latest values except status, so updating new status
        // so that we can push to db
        setAssignmentDetails(prevState => ({
            ...prevState,
            status: newValue.value // Update only the status field
        }));
    };

    
     // Fetch task assignment details based on assignmentId
     const fetchTaskAssignmentDetails = async (selectedAssignmentId) => {       
       // e.preventDefault();
        try {

            const assignmentId = parseInt(selectedAssignmentId);
            console.log(" fetchTaskAssignmentDetails - assignmentId :", assignmentId);

            const response = await axios.get(`${BASE_URL}/api/taskdetails?assignmentId=${assignmentId}`);
            console.log("response :", response.data.assignmentdetails);
            setAssignmentDetails(response.data.assignmentdetails);

        } catch (error) {
            console.error('Error fetching task assignment details:', error);
        }
    };    

    // Validate that event object (e) is defined , To handle cutom Components
    const handleChange = (e) => {
        // Validate that event object (e) is defined
        if (e?.target?.name) {
            const { name, value } = e.target;
            setAssignmentDetails(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };
    // Final Form submission to Update Task assignment
    const handleSubmit = async (e) => {
        e.preventDefault();
       // Format the selected time as 'HH:MM:SS'
        const formattedStartTime = assignmentDetails.start_time + ':00';
        const formattedEndTime = assignmentDetails.end_time + ':00';

        // Check if worker_id is valid and convert to integer
        const parsedWorkerId = Number.isInteger(assignmentDetails.worker_id)
            ? assignmentDetails.worker_id  // If already an integer, use it directly
            : parseInt(assignmentDetails.worker_id); // If not, parse it to an integer

        // Ensure parsedWorkerId is not NaN after parsing
        if (isNaN(parsedWorkerId)) {
            console.error('Worker ID is not a valid integer:', assignmentDetails.worker_id);
        }
        // Prepare updated task assignment data
        // Update the assignmentDetails object with formatted times
        const updatedAssignmentDetails = {
            ...assignmentDetails,
            start_time: formattedStartTime,
            end_time: formattedEndTime,
            worker_id: parsedWorkerId
        };


        //Send updated task assignment data to the backend for updating
        try {
            await axios.put(`${BASE_URL}/api/assignmentupdate`, updatedAssignmentDetails)
                .then(response => {
                    console.log("Status : ", response.data.message);
                }).catch(error => {
                    console.error('Error:', error.message);
                });
                 // Reset form fields after successful update
                setAssignmentDetails(initialAssignmentDetails); // Reset assignmentDetails to initial state
                setSelectedAssignmentId(initialSelectedAssignmentId); // Reset selectedAssignmentId to initial state
    // Reset other form fields as needed...
        } catch (error) {
            console.error('Error updating task assignment:', error);
            // Handle error: show error message to the user
        }
    };

    return (
        // <div style={styles.container}>
        <div className='container'>
               <h4 style={{ textAlign: 'center', marginBottom:'-60px'  }}>Update Task Assignment</h4>
            <form onSubmit={handleSubmit} style={styles.form}>             
                {/* <div style={styles.transparentContainer}> */}
                    <div style={styles.formGroup}>
                        <label>Please Select Assignment Id:</label>
                        <AssignmentIDPicker
                            selectedValue={selectedAssignmentId}
                            onChange={handleSelectChange}
                            style={styles.select}
                            name="assignment_id"
                            value={assignmentDetails.assignment_id || ''}
                        />
                    </div>
                    {/* <div style={styles.formGroup}>
                        <button onClick={fetchTaskAssignmentDetails} style={styles.button}>Edit Assignment Details</button>
                    </div> */}
                {/* </div> */}
                
                <div style={styles.formGroup}>
                    <input name="worker_id" type="text" value={assignmentDetails.worker_id || ''} onChange={handleChange} style={styles.input} placeholder='Worker ID' />
                </div>
                <div style={styles.formGroup}>
                    <textarea name="service_desc" value={assignmentDetails.service_desc || ''} onChange={handleChange} style={styles.textarea} placeholder='Service Description' />
                </div>
                <div style={styles.formGroup}>
                    <label>Assignment Date:</label>
                    <input  name="assignment_date" type="date" value={assignmentDetails.assignment_date || ''} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label>Start Time:</label>
                    <input name="start_time" type="time" value={assignmentDetails.start_time || ''} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label>End Time:</label>
                    <input name="end_time" type="time" value={assignmentDetails.end_time || ''} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <   label>Completion Date:</label>
                    <input name="completion_date" type="date" value={assignmentDetails.completion_date || ''} onChange={handleChange} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <AssignmentStatusPicker
                        selectedValue={selectedStatus}
                        onChange={handleStatusChange}
                        style={styles.select}       
                        name="status"   
                        value={assignmentDetails.status || ''}             
                    />
                </div>
                <button type="submit" style={styles.button}>Update Task Assignment</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow:'0 4px 8px rgba(70, 232, 6, 0.87);',
        marginTop:'10px'
       
    },
    form: {
        width: '70%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        marginTop: '100px',
    },
    transparentContainer: {
        backgroundColor: 'transparent', // Set the background color to transparent
        border: '1px solid gray', // Add a border for visualization
        padding: '10px', // Add padding to the container
        margin: '10px', // Add margin to create space between elements
        borderRadius:'10px'
    },
    formGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        height: '32px',
        padding: '6px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        fontSize: '14px',
    },

    textarea: {
        width: '100%',
        height: '32px',
        padding: '6px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        fontSize: '14px',
    },
    select: {
        width: '100%',
        height: '32px',
        padding: '6px',
        border: '1px solid #ccc',
        borderRadius: '3px',
        fontSize: '14px',
    },
    button: {
        width: '100%',
        height: '32px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
    },
};

export default UpdateTaskAssingment;
