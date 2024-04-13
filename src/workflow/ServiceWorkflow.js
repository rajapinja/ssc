import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateServiceStatus } from './redux';

const ServiceWorkflow = () => {
  const serviceStatus = useSelector((state) => state.serviceStatus);
  const dispatch = useDispatch();

  const handleUpdateStatus = (status) => {
    dispatch(updateServiceStatus(status));
  };

  return (
    <div>
      <h3>Service Workflow</h3>
      <p>Current Status: {serviceStatus}</p>
      <button onClick={() => handleUpdateStatus(WorkflowStages.ASSIGNED)}>Assign Worker</button>
      <button onClick={() => handleUpdateStatus(WorkflowStages.IN_PROGRESS)}>Start Work</button>
      <button onClick={() => handleUpdateStatus(WorkflowStages.COMPLETED)}>Complete Work</button>
      {/* Additional buttons for other stages */}
    </div>
  );
};

export default ServiceWorkflow;
