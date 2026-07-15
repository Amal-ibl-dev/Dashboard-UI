import { Bell } from "lucide-react";
import { ICON_BUTTON } from "../../utils/headerStyles"

export default function NotificationButton() {
  return (
    <button className={`${ICON_BUTTON} relative`}>
      <Bell size={18} />

      <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-orange-500 ring-2 ring-white dark:ring-zinc-900" />
    </button>
  );
}