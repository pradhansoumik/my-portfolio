import useDarkMode from "../hooks/useDarkMode";

export default function DarkModeToggle() {
  const [darkMode, toggleDarkMode, mounted] = useDarkMode();

  if (!mounted) {
    return (
      <button
        className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 w-20 h-8"
        aria-hidden
      />
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="ml-4 px-3 py-1 rounded bg-sunset text-white hover:bg-sunset-light transition text-sm"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
