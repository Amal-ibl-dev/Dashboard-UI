import { MoreHorizontal } from "lucide-react";

import { PROGRESS } from "../../const/overviewStats"

import ProgressBar from "./ProgressBar";

import {
  CARD,
  HEADER_BUTTON,
} from "../../utils/overviewStyles"

export default function CourseStatisticsCard() {
  return (
    <section className={`${CARD} h-full flex flex-col`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          Course Statistics
        </h3>

        <button className={HEADER_BUTTON}>
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-5">
        {PROGRESS.map((progress) => (
          <ProgressBar
            key={progress.label}
            progress={progress}
          />
        ))}
      </div>
    </section>
  );
}