import { useState } from "react";

import Node from "./Node";
import NodeText from "./NodeText";
export default function NodeList({ nodeList, onDeleteNode, onNodeList }) {
  return (
    <div className="node-list">
      {nodeList.map((node) => (
        <Node
          id={node.id}
          header={node.header}
          date={node.date}
          onDeleteNode={onDeleteNode}
          key={node.id}
        />
      ))}
      <NodeText onNodeList={onNodeList} />
    </div>
  );
}
