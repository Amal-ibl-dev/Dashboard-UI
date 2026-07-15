import { ChevronRight } from "lucide-react";

import { PROFILE } from "../../const/profile"

import {
  PROFILE_BUTTON,
  AVATAR,
} from "../../utils/headerStyles"

export default function ProfileMenu() {
  return (
    <button className={PROFILE_BUTTON}>
      <div className={AVATAR}>
        {PROFILE.initials}
      </div>

      <div className="text-left">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          {PROFILE.name}
        </p>

        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          {PROFILE.role}
        </p>
      </div>

      <ChevronRight
        size={16}
        className="text-zinc-300 dark:text-zinc-600"
      />
    </button>
  );
}