import { useState, useEffect } from "react";
import "./index.css";
import NodeList from "./component/NodeList";
import { v4 as uuid } from "uuid";
import Search from "./component/Search";
import Header from "./component/Header";

export default function App() {
  const [nodeList, setNodeList] = useState(() => {
    const storedNodeList = localStorage.getItem("nodeList");
    return storedNodeList ? JSON.parse(storedNodeList) : [];
  });
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("nodeList", JSON.stringify(nodeList));
  }, [nodeList]);

  function handleNodeList(text) {
    const date = new Date();
    const noteText = {
      id: uuid(),
      header: text,
      date: date.toLocaleDateString(),
    };
    setNodeList((note) => [...note, noteText]);
  }

  function handelDeleteNode(id) {
    const filteredNode = nodeList.filter((node) => node.id !== id);
    setNodeList(filteredNode);
  }

  function handleSearchText(text) {
    setSearchText(text);
  }

  function handleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  return (
    <div className={darkMode ? "container dark-mode" : "container"}>
      <Header onToggelDarkMode={handleDarkMode} darkMode={darkMode} />
      <Search onSetSearch={handleSearchText} />
      <NodeList
        onNodeList={handleNodeList}
        onDeleteNode={handelDeleteNode}
        nodeList={nodeList.filter((note) =>
          note.header.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </div>
  );
}
