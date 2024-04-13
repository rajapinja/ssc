import React from "react";

function workflowNodesEdges(workflows) {
  // Create nodes and edges from the workflow data
  const initialNodes = [];
  const initialEdges = [];

  workflows.forEach((workflow, index) => {
    // Use the unique ID generated for each workflow as the node ID
    initialNodes.push({
      id: workflow.id,
      data: { label: `${workflow.task_id}: ${workflow.status}` },
      position: { x: index * 150, y: 0 },
      className: 'workflow-node', // Apply node CSS class
    });

    if (index > 0) {
      // Use the unique IDs of source and target nodes
      initialEdges.push({
        id: `${workflow.id}_${index}`,
        source: workflows[index - 1].id,
        target: workflow.id,
        label: 'moved to', 
        type: 'step',
        animated: true,
        className: 'workflow-edge', // Apply edge CSS class
      });
    }
  });

  // Return the initialNodes and initialEdges arrays
  return { initialNodes, initialEdges };
}

export default workflowNodesEdges;
