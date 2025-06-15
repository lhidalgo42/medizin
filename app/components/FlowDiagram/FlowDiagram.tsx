import React from 'react';
import { View } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { Node } from './Node';
import { Connection } from './Connection';
import { FlowNode, FlowConnection } from './types';
import { useTheme } from '../ThemeContext';

interface FlowDiagramProps {
  nodes: FlowNode[];
  connections: FlowConnection[];
  svgWidth: number;
  svgHeight: number;
  onNodePress?: (nodeId: string) => void;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({
  nodes,
  connections,
  svgWidth,
  svgHeight,
  onNodePress,
}) => {
  const { colors } = useTheme();
  
  return (
    <Svg width={svgWidth} height={svgHeight}>
      <G>
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.fromId);
          const toNode = nodes.find(n => n.id === conn.toId);
          if (!fromNode || !toNode) return null;
          
          return (
            <Connection
              key={index}
              fromNode={fromNode}
              toNode={toNode}
              label={conn.label}
              color={colors.border}
            />
          );
        })}
        
        {nodes.map((node) => (
          <Node
            key={node.id}
            node={node}
            onPress={() => onNodePress?.(node.id)}
          />
        ))}
      </G>
    </Svg>
  );
};