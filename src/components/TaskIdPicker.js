import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { BASE_URL } from '../app/Config';

function TaskIdPicker({ selectedValue, onChange }) {
    const [taskids, setTaskIds] = useState([]);

    useEffect(() => {
        fetchTaskIds();
    }, []);

    const fetchTaskIds = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/task`);
            console.log("task_ids :", response.data.task_ids);
            setTaskIds(response.data.task_ids);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };
    

    const optionsTask = taskids.map((taskid) => ({
        value: taskid[0],
        label: taskid[0]
    }));

     //If assignmentIds is empty, show a default option
     if (optionsTask.length === 0) {
            optionsTask.push({
                value: 'default',
                label: 'No tasks available'
            });
    }

    return (
        // <div  style={{ marginTop: 10 }}>            
            <Select
                placeholder="Select a task Id..."
                value={selectedValue}
                onChange={onChange}
                options={optionsTask}
               
            />
        // </div>
    );
}

export default TaskIdPicker;
