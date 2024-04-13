import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_URL } from '../app/Config';

function AssignmentIDPicker({ selectedValue, onChange }) {
    
    const [assignmentIds, setAssignmentIds] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/assignments`)          
            console.log("assignments :", response.data.assignments);    
            setAssignmentIds(response.data.assignments);            
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const optionsIds = assignmentIds.map((item) => ({
        value: item[0],
        label: item[0]
    }));

    //If assignmentIds is empty, show a default option
    if (optionsIds.length === 0) {
            optionsIds.push({
                value: 'default',
                label: 'No assignments available'
            });
    }

    return (
        <Select
            placeholder="Select an assignment Id..."
            value={selectedValue}
            onChange={onChange}
            options={optionsIds}
        />
    );
}

export default AssignmentIDPicker;
