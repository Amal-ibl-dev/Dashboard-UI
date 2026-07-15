import { useState } from "react";
import { Pencil, LayoutGrid } from "lucide-react";

import { STATS } from "../../const/overviewStats"

import StatCard from "./StatCard";

import {
  CARD,
  ICON_BUTTON,
  TAB,
} from "../../utils/overviewStyles"

export default function StudentTeacherCard() {
  const [tab, setTab] = useState("student");

  return (
    <section className={CARD}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-1.5 text-lg font-semibold">
          <button
            onClick={() => setTab("student")}
            className={
              tab === "student"
                ? TAB.active
                : TAB.inactive
            }
          >
            Student
          </button>

          <span className="text-zinc-300 dark:text-zinc-600">
            /
          </span>

          <button
            onClick={() => setTab("teacher")}
            className={
              tab === "teacher"
                ? TAB.active
                : TAB.inactive
            }
          >
            Teacher
          </button>
        </div>

        <div className="flex gap-2">
          <button className={ICON_BUTTON}>
            <Pencil size={15} />
          </button>

          <button className={ICON_BUTTON}>
            <LayoutGrid size={15} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {STATS.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}
      </div>
    </section>
  );
}