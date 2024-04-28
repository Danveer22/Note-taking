export default function Header({ onToggelDarkMode, darkMode }) {
  return (
    <header className="header">
      <h1>Note</h1>
      <button className="save" onClick={onToggelDarkMode}>
        {darkMode ? "Light" : "Dark"}
      </button>
    </header>
  );
}
