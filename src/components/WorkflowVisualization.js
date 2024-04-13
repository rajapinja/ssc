import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const WorkflowVisualization = ({ workflowData }) => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);

        // Clear previous visualization
        svg.selectAll('*').remove();

        // Define transitions between states
        const transitions = [
            { source: 'task_created', target: 'pending_assignment' },
            { source: 'pending_assignment', target: 'assigned' },
            { source: 'assigned', target: 'work_inprogress' },
            { source: 'work_inprogress', target: 'work_pending' },
            { source: 'work_pending', target: 'work_completed' },
            { source: 'work_completed', target: 'payment_pending' },
            { source: 'payment_pending', target: 'payment_received' },
            { source: 'payment_received', target: 'paid-to-worker' },
            { source: 'paid-to-worker', target: 'task_completed' },
        ];

        // Draw edges (transitions)
        svg.selectAll('.transition')
            .data(transitions)
            .enter()
            .append('line')
            .attr('class', 'transition')
            .attr('x1', 100) // Starting x-coordinate
            .attr('y1', (d, i) => 50 * (i + 1)) // Starting y-coordinate (adjust as needed)
            .attr('x2', 200) // Ending x-coordinate
            .attr('y2', (d, i) => 50 * (i + 2)) // Ending y-coordinate (adjust as needed)
            .style('stroke', 'black')
            .style('stroke-width', 2);

        // Draw nodes (states)
        svg.selectAll('.node')
            .data(workflowData.workflows)
            .enter()
            .append('circle')
            .attr('class', 'node')
            .attr('cx', 100) // X-coordinate for the circle (adjust as needed)
            .attr('cy', (d, i) => 50 * (i + 1)) // Y-coordinate for the circle (adjust as needed)
            .attr('r', 10) // Radius of the circle
            .style('fill', 'blue');

        // Add state labels
        svg.selectAll('.label')
            .data(workflowData.workflows)
            .enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', 120) // X-coordinate for the label (adjust as needed)
            .attr('y', (d, i) => 50 * (i + 1) + 5) // Y-coordinate for the label (adjust as needed)
            .text(d => d.status); // Use the status as the label text

    }, [workflowData]);

    return (
        <svg ref={svgRef} width="800" height="600"></svg>
    );
};

export default WorkflowVisualization;
