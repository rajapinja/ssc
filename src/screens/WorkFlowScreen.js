import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../app/Config';
import '../css/WorkflowDisplay.css';
import TaskIdPicker from '../components/TaskIdPicker';
import WorkflowComponent from '../components/WorkFlowComponent'; // Update import statement
import Modal from 'react-modal'; // Import modal library

// Modal styles (you can adjust these as needed)
const modalStyles = {
  content: {
    width: '80%',
    height: '50%',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '5px',
    overflow: 'auto',
    padding: '20px',
    marginTop: '60px'
  },
};

// Modal component to display workflow
const WorkflowModal = ({ isOpen, onClose, workflows}) => {   
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <h2>Workflow Diagram</h2>
      <WorkflowComponent workflows={workflows} />
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

const WorkflowDisplay = () => {
  const [selectedTask, setSelectedTask] = useState('');
  const [workflows, setWorkflows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTaskChange = (newValue) => {
    setSelectedTask(newValue);
    if (newValue) {
      fetchWorkflows(newValue.value);
    } else {
      setWorkflows([]); // Clear workflows if no task is selected
    }
  };

  const fetchWorkflows = async (taskId) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/workflow/${taskId}`);
      const fetchedWorkflows = response.data.workflows;
      console.log('Fetched workflows:', fetchedWorkflows);
      generateUniqueIds(fetchedWorkflows);
      setWorkflows(fetchedWorkflows);
    } catch (error) {
      console.error('Error fetching workflows:', error);
    }
  };

  // Initial data doesn't have unique id, which is required to generate workflow, so we are generating id and appending to response data and sending to Workflow component
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
        <h4 style={{ textAlign: 'center' }}> Workflow </h4>
        <div className="select-container">
          <label>Task Id:</label>
          <TaskIdPicker
            selectedValue={selectedTask}
            onChange={handleTaskChange}
            className="select-container"
          />
        </div>
      </form>
    
      {selectedTask && (
        <div style={{ textAlign: 'center', marginTop: '20px', width:'140px' }}>
          <button onClick={handleOpenModal}>Open Workflow</button>
        </div>
      )}
      <WorkflowModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        workflows={workflows}
      />
    </div>
  );
};

export default WorkflowDisplay;
