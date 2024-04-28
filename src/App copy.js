import { useState, useEffect } from "react";
import "./index.css";
import NodeList from "./component/NodeList";
import { v4 as uuid } from "uuid";
import Search from "./component/Search";
import Header from "./component/Header";

export default function App() {
  const [nodeList, setNodeList] = useState([
    {
      id: uuid(),
      header: "What is your program for today?",
      date: "22 / 10 / 2023",
    },
    // {
    //   id: uuid(),
    //   header: "Today I will go singing class.",
    //   date: "23 / 10 / 2023",
    // },
    // {
    //   id: uuid(),
    //   header: "I eat mango",
    //   date: "24 / 10 / 2023",
    // },
    // {
    //   id: uuid(),
    //   header: "Honesty is the best policy.",
    //   date: "25 / 10 / 2023",
    // },
  ]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

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
          note.header.toLowerCase().includes(searchText)
        )}
      />
    </div>
  );
}
