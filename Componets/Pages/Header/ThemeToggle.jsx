import { Sun, Moon } from "lucide-react";

import {
  THEME_WRAPPER,
  THEME_BUTTON,
  ACTIVE_LIGHT,
  ACTIVE_DARK,
  INACTIVE,
} from "../../utils/headerStyles"

export default function ThemeToggle({
  isDark,
  setIsDark,
}) {
  return (
    <div className={THEME_WRAPPER}>
      <button
        onClick={() => setIsDark(false)}
        className={`${THEME_BUTTON} ${
          !isDark ? ACTIVE_LIGHT : INACTIVE
        }`}
      >
        <Sun size={16} />
      </button>

      <button
        onClick={() => setIsDark(true)}
        className={`${THEME_BUTTON} ${
          isDark ? ACTIVE_DARK : INACTIVE
        }`}
      >
        <Moon size={16} />
      </button>
    </div>
  );
}