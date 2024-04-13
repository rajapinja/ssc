import React, {useCallback} from 'react';
import ReactFlow, {
  ReactFlowProvider,
  useReactFlow,
  useNodesState,
  useEdgesState
} from 'reactflow';
 
import '../css/WorkFlowComponent.css';
import 'reactflow/dist/style.css';
// import { initialNodes, initialEdges } from './nodes-edges.js';

import workflowNodesEdges from './workflownodes-edges.js';

const WorkflowComponent = ({ workflows }) => {
   // Create nodes and edges from the workflow data
  // const nodes = [];
  // const edges = [];

  // workflows.forEach((workflow, index) => {
  //   // Use the unique ID generated for each workflow as the node ID
  //   nodes.push({
  //     id: workflow.id,
  //     data: { label: `${workflow.task_id}: ${workflow.status}` },
  //     position: { x: index * 150, y: 0 },
  //     className: 'workflow-node', // Apply node CSS class
  //   });


  //   if (index > 0) {
  //     // Use the unique IDs of source and target nodes
  //     edges.push({
  //       id: `${workflow.id}_${index}`,
  //       source: workflows[index - 1].id,
  //       target: workflow.id,
  //       className: 'workflow-edge', // Apply edge CSS class
  //     });
  //   }
  // });

  // console.log("nodes :", nodes);
  // console.log("edges :", edges);
  const { initialNodes, initialEdges } = workflowNodesEdges(workflows);

  const getLayoutedElements = (nodes, edges) => {
    return { nodes, edges };
  };
  
  const LayoutFlow = () => {
    const { fitView } = useReactFlow();
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
    const onLayout = useCallback(() => {
      const layouted = getLayoutedElements(nodes, edges);
  
      setNodes([...layouted.nodes]);
      setEdges([...layouted.edges]);
  
      window.requestAnimationFrame(() => {
        fitView();
      });
    }, [nodes, edges]);
  
    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      />
    );
  };

  return (
    // <div className="workflow-container" style={{ width: '100vw', height: '100vh' }}>
    //   <ReactFlow  nodes={nodes}
    //     edges={edges}  fitView>
    //     <MiniMap pannable zoomable />
    //     <Controls />
    //     <MiniMap />
    //     <Background variant="dots" gap={12} size={1} />
    //   </ReactFlow>   
    // </div>
    <ReactFlowProvider>
    <LayoutFlow />
  </ReactFlowProvider>

  );
};

export default WorkflowComponent;
