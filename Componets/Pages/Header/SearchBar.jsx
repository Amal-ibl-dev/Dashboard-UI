import { Search, Mic } from "lucide-react";
import {
  SEARCH_CONTAINER,
  SEARCH_BOX,
  ICON_BUTTON,
} from "../../utils/headerStyles"

export default function SearchBar() {
  return (
    <div className={SEARCH_CONTAINER}>
      <div className={SEARCH_BOX}>
        <Search
          size={17}
          className="text-zinc-400 dark:text-zinc-500 shrink-0"
        />

        <input
          placeholder="Search anything"
          className="flex-1 bg-transparent outline-none text-sm text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500"
        />
      </div>

      <button className={ICON_BUTTON}>
        <Mic size={17} />
      </button>
    </div>
  );
}