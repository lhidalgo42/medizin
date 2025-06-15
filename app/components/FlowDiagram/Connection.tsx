import React from 'react';
import { Line, Polygon, Text as SvgText } from 'react-native-svg';
import { FlowNode } from './types';

interface ConnectionProps {
  fromNode: FlowNode;
  toNode: FlowNode;
  label?: string;
  color: string;
}

export const Connection: React.FC<ConnectionProps> = ({ fromNode, toNode, label, color }) => {
  // Calculate connection points
  const fromCenterX = fromNode.x + fromNode.width / 2;
  const fromCenterY = fromNode.y + fromNode.height / 2;
  const toCenterX = toNode.x + toNode.width / 2;
  const toCenterY = toNode.y + toNode.height / 2;
  
  // Determine best connection points
  let x1 = fromCenterX;
  let y1 = fromNode.y + fromNode.height; // Bottom of from node
  let x2 = toCenterX;
  let y2 = toNode.y; // Top of to node
  
  // Adjust for horizontal connections
  if (Math.abs(fromCenterY - toCenterY) < 20) {
    if (fromCenterX < toCenterX) {
      x1 = fromNode.x + fromNode.width;
      y1 = fromCenterY;
      x2 = toNode.x;
      y2 = toCenterY;
    } else {
      x1 = fromNode.x;
      y1 = fromCenterY;
      x2 = toNode.x + toNode.width;
      y2 = toCenterY;
    }
  }
  
  // Calculate arrow head
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowLength = 10;
  const arrowAngle = Math.PI / 6;
  
  const arrowX1 = x2 - arrowLength * Math.cos(angle - arrowAngle);
  const arrowY1 = y2 - arrowLength * Math.sin(angle - arrowAngle);
  const arrowX2 = x2 - arrowLength * Math.cos(angle + arrowAngle);
  const arrowY2 = y2 - arrowLength * Math.sin(angle + arrowAngle);
  
  return (
    <>
      <Line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={2}
      />
      
      <Polygon
        points={`${x2},${y2} ${arrowX1},${arrowY1} ${arrowX2},${arrowY2}`}
        fill={color}
      />
      
      {label && (
        <SvgText
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 5}
          fontSize={12}
          fill={color}
          textAnchor="middle"
        >
          {label}
        </SvgText>
      )}
    </>
  );
};