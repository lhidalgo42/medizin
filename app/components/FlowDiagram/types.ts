export interface FlowNode {
  id: string;
  title: string;
  description?: string | string[];
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  textColor?: string;
}

export interface FlowConnection {
  fromId: string;
  toId: string;
  label?: string;
}