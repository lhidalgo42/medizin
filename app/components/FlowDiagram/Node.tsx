import React from 'react';
import { G, Rect, Text as SvgText, TSpan } from 'react-native-svg';
import { FlowNode } from './types';

interface NodeProps {
  node: FlowNode;
  onPress?: () => void;
}

export const Node: React.FC<NodeProps> = ({ node, onPress }) => {
  const textLines = node.title.split('\n');
  const lineHeight = 16;
  const startY = node.y + (node.height / 2) - ((textLines.length - 1) * lineHeight / 2);
  
  return (
    <G onPress={onPress}>
      <Rect
        x={node.x}
        y={node.y}
        width={node.width}
        height={node.height}
        fill={node.color}
        stroke="#000"
        strokeWidth={1}
        rx={8}
        ry={8}
      />
      
      <SvgText
        x={node.x + node.width / 2}
        y={startY}
        fontSize={14}
        fontWeight="600"
        fill={node.textColor || '#000000'}
        textAnchor="middle"
      >
        {textLines.map((line, index) => (
          <TSpan
            key={index}
            x={node.x + node.width / 2}
            dy={index === 0 ? 0 : lineHeight}
          >
            {line}
          </TSpan>
        ))}
      </SvgText>
    </G>
  );
};