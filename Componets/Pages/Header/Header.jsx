import { useEffect, useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import NotificationButton from "./NotificationButton";
import ProfileMenu from "./ProfileMenu";

import { HEADER } from "../../utils/headerStyles";
import { HEADER_TITLE } from "../../const/profile.js";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      isDark
    );
  }, [isDark]);

  const today = useMemo(
    () =>
      new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    []
  );

  return (
    <header className={HEADER}>
      <div className="shrink-0">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
          {HEADER_TITLE}
        </h1>

        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          {today}
        </p>
      </div>

      <SearchBar />

      <div className="flex items-center gap-3">
        <ThemeToggle
          isDark={isDark}
          setIsDark={setIsDark}
        />

        <NotificationButton />

        <ProfileMenu />
      </div>
    </header>
  );
}