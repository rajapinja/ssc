import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import '../css/WorkflowDisplay.css'; // Import your CSS file
import TaskIdPicker from '../components/TaskIdPicker';
import WorkflowVisualization from '../components/WorkflowVisualization';
import WorkflowComponent from '../components/WorkFlowComponent'; 
import workflowNodesEdges from '../components/workflownodes-edges';
import 'reactflow/dist/style.css';


const WorkflowDisplay = () => {

    const [selectedTask, setSelectedTask] = useState('');
    const [workflows, setWorkflows] = useState([]);

    // const handleTaskChange = (newValue) => {
    //     console.log("selectedTask :",newValue.label);
    //     setSelectedTask(selectedTask);
    //     fetchWorkflows(newValue.value)
    // };

    const handleTaskChange = (newValue) => {
        console.log("selectedTask :", newValue.label);
        setSelectedTask(newValue.value); // Update state with the new value from the dropdown
        fetchWorkflows(newValue.value);
    };

    const fetchWorkflows = async (taskId) => {
        try {
            const response = await axios.get(`${BASE_URL}/api/workflow/${taskId}`);
            const fetchedWorkflows = response.data.workflows;
            console.log('workflows:', fetchedWorkflows);
            generateUniqueIds(fetchedWorkflows); 
            console.log('generateUniqueIds - workflows:', fetchedWorkflows);// Generate unique IDs for the fetched workflows
            setWorkflows(fetchedWorkflows);
        } catch (error) {
            console.error('Error fetching workflow:', error);
        }
    };    

    
    const generateUniqueIds = (workflows) => {
        const statusCounts = {};
        workflows.forEach((workflow) => {
          const { status } = workflow;
          if (!statusCounts[status]) {
            statusCounts[status] = 1;
          } else {
            statusCounts[status]++;
          }
          workflow.id = `${status}_${workflow.task_id}_${statusCounts[status]}`;
        });
    };   
 

    return (
        <div className="container">           
            <form>          
                 <h2 style={{ textAlign: 'center'}}> Workflow </h2>     
                <div className="select-container">    
                <label>Task Id:</label>              
                    <TaskIdPicker 
                        selectedValue={selectedTask}
                        onChange={handleTaskChange}
                        className="select-container"
                    />               
                </div>
                <div className="workflow-table">              
                    <table>
                        <thead>
                            <tr>
                                <th>Task ID</th>
                                <th>Status</th>
                                <th>Timestamp</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {workflows.map((workflow, index) => (
                                <tr key={index}>
                                    <td>{workflow.task_id}</td>
                                    <td>{workflow.status}</td>
                                    <td>{workflow.timestamp}</td>
                                    <td>{workflow.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>           
            </form>           
            <div>
                <h3>React Workflow</h3>
                {/* <WorkflowComponent workflows={workflows}/> */}
                <workflowNodesEdges workflows = {workflows}/>
            </div>
        </div>
    );
};

export default WorkflowDisplay;
