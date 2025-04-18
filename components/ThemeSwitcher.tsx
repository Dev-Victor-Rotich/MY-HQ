import useThemeStore from "@/themeStore";
import { Button } from "./ui/button";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-950 rounded "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </Button>
  );
};

export default ThemeSwitcher;
