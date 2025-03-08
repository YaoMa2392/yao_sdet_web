import React, { useState } from "react";
import "./WorkflowDiagram.css"
import ReactFlow, { Handle, MiniMap, Controls } from "reactflow";
import "reactflow/dist/style.css";
import { motion } from "framer-motion";

const workflowNodes = [
  { id: "1", data: { label: "Requirement Analysis", details: "Collaborate with PM, developers, and stakeholders to review PRD/FRD, define test coverage, and identify automation feasibility." }, position: { x: 0, y: 100 } },
  { id: "2", data: { label: "Test Plan & Case Design", details: "Design test plans and test cases, specifying test methodologies, tools, and automation strategies." }, position: { x: 200, y: 100 } },
  { id: "3", data: { label: "Test Execution & Automation", details: "Assign test tickets, execute manual and automated tests (smoke, functional, performance, API, regression, etc.), and integrate with CI/CD." }, position: { x: 400, y: 100 } },
  { id: "4", data: { label: "Defect Reporting", details: "Log bugs, create detailed test reports, and provide feedback to the development team." }, position: { x: 600, y: 100 } },
  { id: "5", data: { label: "Bug Retesting & Validation", details: "Log bugs, create detailed test reports, and provide feedback to the development team." }, position: { x: 800, y: 100 } },
  { id: "6", data: { label: "Continuous Test Optimization", details: "Regularly update test plans, refine automation strategies, and enhance test efficiency." }, position: { x: 1000, y: 100 } },
];

const workflowEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e2-3", source: "2", target: "3" },
  { id: "e3-4", source: "3", target: "4" },
  { id: "e4-5", source: "4", target: "5" },
  { id: "e5-6", source: "5", target: "6" },
];

const WorkflowDiagram = () => {
  const [hoveredNode, setHoveredNode] = useState(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const onNodeHover = (event, node) => {
    setHoveredNode(node);

    setTooltipPosition({
      x: node.position.x ,  // 10px to the right of the node
      y: node.position.y - 100,  // 40px above the node (or adjust as needed)
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="workflow-diagram-container"
    >
      <div style={{ height: 500, width: "100%" }}>
        <ReactFlow
          nodes={workflowNodes}
          edges={workflowEdges}
          fitView
          onNodeMouseEnter={onNodeHover}
          onNodeMouseLeave={() => setHoveredNode(null)}
        />
        {hoveredNode && (
          <div className="node-details-tooltip" style={{ position: "absolute", top: tooltipPosition.y, left: tooltipPosition.x }}>
            <div>{hoveredNode.data.label}</div>
            <div>{hoveredNode.data.details}</div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default WorkflowDiagram;
