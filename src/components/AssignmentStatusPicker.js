import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_URL } from '../app/Config';

function AssignmentStatusPicker({ selectedValue, onChange }) {
    const [assignmentStatus, setAssignmentStatus] = useState([]);

    useEffect(() => {
        fetchAssignmentStatus();
    }, []);

    const fetchAssignmentStatus = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/taskstatus`);
            console.log("taskstatus :", response.data.statutes);
            setAssignmentStatus(response.data.statutes);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    

    const optionsStatus = assignmentStatus.map((item) => ({
        value: item[0],
        label: item[0]
    }));

     //If assignmentIds is empty, show a default option
     if (optionsStatus.length === 0) {
            optionsStatus.push({
                value: 'default',
                label: 'No assignments available'
            });
    }

    return (
        // <div  style={{ marginTop: 10 }}>            
            <Select
                placeholder="Select a assignment Status..."
                value={selectedValue}
                onChange={onChange}
                options={optionsStatus}
               
            />
        // </div>
    );
}

export default AssignmentStatusPicker;
