export default function Node({ id, header, date, onDeleteNode }) {
  console.log(id, header, date);
  return (
    <div className="node">
      <span>{header} </span>
      <div className="footer-node">
        <small>{date}</small>
        <button className="delete-node" onClick={() => onDeleteNode(id)}>
          ❌
        </button>
      </div>
    </div>
  );
}
