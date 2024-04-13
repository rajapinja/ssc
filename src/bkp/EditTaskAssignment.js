import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import AssignmentIDPicker from '../components/AssignmentIDPicker';


const EditTaskAssingment = () => {

    const [workerId, setWorkerId] = useState('');
    const [assignmentDate, setAssignmentDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [completionDate, setCompletionDate] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedAssignmentId, setSelectedAssignmentId] = useState('');
    // const [assignmentIds, setAssignmentIds] = useState([]);
    const [serviceDesc, setServiceDesc] = useState('');


    // useEffect(() => {
    //     const fetchTaskAssignmentIds = (event) => {
    //         //event.preventDefault(); // Prevent default form submission behavior
    //         try {
    //             axios.get(`${BASE_URL}/api/assignmentids`)
    //                 .then(response => {
    //                     console.log("states :", response.data.assignmentids);
    //                     setAssignmentIds(response.data.assignmentids);
    //                 }).catch(error => {
    //                     console.error('Error:', error.message);
    //                 });
    //         } catch (error) {
    //             console.error('Error fetching task assignment ids:', error);
    //         }
    //     };

    //     fetchTaskAssignmentIds();
    // }, [])


    // //Inside the component
    // const assignmentIdOptions = assignmentIds.map((assignmentId) => ({
    //     value: assignmentId,
    //     label: assignmentId
    // }));

    // //If assignmentIds is empty, show a default option
    // if (assignmentIdOptions.length === 0) {
    //     assignmentIdOptions.push({
    //         value: 'default',
    //         label: 'No assignments available'
    //     });
    // }

    // Fetch task assignment details based on assignmentId
    const fetchTaskAssignmentDetails = async () => {

        setSelectedAssignmentId(selectedAssignmentId)
        const parsedAssignmentId = parseInt(selectedAssignmentId);

        try {
            await axios.get(`${BASE_URL}/api/taskassignment/fetchdetails/?assignmentId=${parsedAssignmentId}`)
                .then(response => {
                    console.log("response :", response.data.assignmentdetails);
                    // setWorkerId(data.workerId);
                    // setServiceDesc(data.serviceDesc)
                    // setAssignmentDate(data.assignmentDate);
                    // setStartTime(data.startTime);
                    // setEndTime(data.endTime);
                    // setCompletionDate(data.completionDate);
                    // setSelectedStatus(data.selectedStatus);
                }).catch(error => {
                    console.error('Error:', error.message);
                });

        } catch (error) {
            console.error('Error fetching task assignment details:', error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("selectedAssignmentId :", selectedAssignmentId);
        // Format the selected time as 'HH:MM:SS'
        const formattedStartTime = startTime + ':00';
        const formattedEndTime = endTime + ':00';
        // Convert assignmentId and workerId to integers
        const parsedAssignmentId = parseInt(selectedAssignmentId);
        const parsedWorkerId = parseInt(workerId);
        // Prepare updated task assignment data
        const updatedTaskAssignment = {
            parsedAssignmentId,
            parsedWorkerId,
            serviceDesc,
            assignmentDate,
            formattedStartTime,
            formattedEndTime,
            completionDate,
            selectedStatus
        };

        //Send updated task assignment data to the backend for updating
        try {
            await axios.put(`${BASE_URL}/api/taskassignment/update`, updatedTaskAssignment)
                .then(response => {
                    console.log("Status : ", response.data.message);
                }).catch(error => {
                    console.error('Error:', error.message);
                });
        } catch (error) {
            console.error('Error updating task assignment:', error);
            // Handle error: show error message to the user
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={{ textAlign: 'center' }}>Edit Task Assignment</h2>
                <div style={styles.formGroup}>
                    <label>Selected Assignment ID:</label>
                    <select
                        value={selectedAssignmentId}
                        onChange={fetchTaskAssignmentDetails}
                        style={styles.select}
                    >
                        {assignmentIdOptions && (assignmentIdOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        )))}
                    </select>
                </div>
                <div style={styles.formGroup}>
                    <label>Worker ID:</label>
                    <input type="text" value={workerId} onChange={(e) => setWorkerId(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label>Service Description:</label>
                    <textarea value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} style={styles.textarea} />
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
                    <label>Completion Date:</label>
                    <input type="date" value={completionDate} onChange={(e) => setCompletionDate(e.target.value)} style={styles.input} />
                </div>
                <div style={styles.formGroup}>
                    <label>Selected Status:</label>
                    <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} style={styles.select}>
                        <option value="default">Please Select Status...</option>
                        <option value="pending">Pending</option>
                        <option value="assigned">Assigned</option>
                        <option value="work_inprogress">Work in Progress</option>
                        <option value="work_pending">Work Pending</option>
                        <option value="work_completed">Work Completed</option>
                        <option value="payment_pending">Payment Pending</option>
                        <option value="payment_received">Payment Received</option>
                        <option value="paid_to_worker">Paid To Worker</option>
                        <option value="task_completed">Task Completed</option>
                    </select>
                </div>
                <button type="submit" style={styles.button}>Update Task Assignment</button>
                {/* <button style={styles.button} onClick={fetchTaskAssignmentIds}>Fetch Assignment Ids</button> */}
            </form>
        </div>
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
