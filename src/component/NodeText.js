import { useState } from "react";

export default function NodeText({ onNodeList }) {
  const [noteText, setNoteText] = useState("");
  const character = 200;

  function handleSaveAndClear() {
    // Call the onNodeList function to save the note
    if (noteText.trim().length > 0) {
      onNodeList(noteText);
      setNoteText("");
    }

    // Clear the textarea after saving
  }
  function handleNoteText(e) {
    if (character - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }
  return (
    <div className="node node-save">
      <textarea
        rows="8"
        columns="20"
        value={noteText}
        placeholder="Take your note..."
        onChange={handleNoteText}
      />
      <div className="footer-node">
        <small>{character - noteText.length} remaining</small>
        <button className="save" onClick={handleSaveAndClear}>
          Save
        </button>
      </div>
    </div>
  );
}
