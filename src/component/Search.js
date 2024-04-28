export default function Search({ onSetSearch }) {
  return (
    <form className="search-container" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSetSearch(e.target.value)}
      />
      <button>🔍</button>
    </form>
  );
}
