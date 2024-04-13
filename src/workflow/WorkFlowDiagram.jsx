import React from 'react';
import { Workflow } from 'react-workflow';

const WorkflowDiagram = ({ tasks }) => {
  // Define static stages
  const staticStages = [
    { id: 'task_created', name: 'Task Created' },
    { id: 'pending_assignment', name: 'Pending Assignment' },
    { id: 'assigned', name: 'Assigned' },
    { id: 'work_inprogress', name: 'Work In Progress' },
    { id: 'work_pending', name: 'Work Pending' },
    { id: 'work_completed', name: 'Work Completed' },
    { id: 'payment_pending', name: 'Payment Pending' },
    { id: 'payment_received', name: 'Payment Received' },
    { id: 'paid_to_worker', name: 'Paid To Worker' },
    { id: 'task_completed', name: 'Task Completed' },
    { id: 'assignment_closed', name: 'Assignment Closed' }
  ];

  // Map dynamic data to stages
  const stages = staticStages.map(stage => {
    const task = tasks.find(task => task.status === stage.id);
    return {
      id: stage.id,
      name: stage.name,
      data: task ? { taskId: task.id, taskName: task.name } : null
    };
  });

  // Define static connections
  const connections = [
    { from: 'task_created', to: 'pending_assignment' },
    { from: 'pending_assignment', to: 'assigned' },
    { from: 'assigned', to: 'work_inprogress' },
    { from: 'work_inprogress', to: 'work_pending' },
    { from: 'work_pending', to: 'work_completed' },
    { from: 'work_completed', to: 'payment_pending' },
    { from: 'payment_pending', to: 'payment_received' },
    { from: 'payment_received', to: 'paid_to_worker' },
    { from: 'paid_to_worker', to: 'task_completed' },
    { from: 'task_completed', to: 'assignment_closed' }
  ];

  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Workflow stages={stages} connections={connections} />
    </div>
  );
};

export default WorkflowDiagram;
