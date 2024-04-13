import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';


const EditTaskAssingment = (selectedValue) => {

    const [workerId, setWorkerId] = useState('');
    const [assignmentDate, setAssignmentDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [completionDate, setCompletionDate] = useState('');  
    const [serviceDesc, setServiceDesc] = useState('');
    const [assignmentDetails, setAssignmentDetails] = useState([]);

    useEffect(() => {
        if (selectedValue) {
            fetchTaskAssignmentDetails();
        }
    }, [selectedValue]);

    // Fetch task assignment details based on assignmentId
    const fetchTaskAssignmentDetails = async () => {
        try {
            await axios.get(`${BASE_URL}/api/taskdetails/?assignmentId=${selectedValue}`)
                .then(response => {
                    console.log("response :", response.data.assignmentdetails);
                    setAssignmentDetails(response.data.assignmentdetails);
                }).catch(error => {
                    console.error('Error:', error.message);
                });
        } catch (error) {
            console.error('Error fetching task assignment details:', error);
        }
    };

    return (
        <>
            <div style={styles.formGroup}>
                <input type="text" value={workerId} onChange={(e) => setWorkerId(e.target.value)} style={styles.input} placeholder='Worker ID' />
            </div>
            <div style={styles.formGroup}>
                <textarea value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} style={styles.textarea} placeholder='Service Description' />
            </div>
            <div style={styles.formGroup}>
                <label>Assignment Date:</label>
                <input type="date" value={assignmentDate} onChange={(e) => setAssignmentDate(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label>Start Time:</label>
                <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <label>End Time:</label>
                <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} style={styles.input} />
            </div>
            <div style={styles.formGroup}>
                <   label>Completion Date:</label>
                <input type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} style={styles.input} />
            </div>
        </>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '50%',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        marginTop: '100px',
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

export default EditTaskAssingment;
