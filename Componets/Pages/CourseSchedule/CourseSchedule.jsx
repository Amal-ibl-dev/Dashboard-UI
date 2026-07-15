import React, { useState } from "react";
import { MoreHorizontal } from "lucide-react";

import { DATES, PEOPLE } from "../../const/schedule";

import DateCard from "./DateCard";
import PersonCard from "./PersonCard";
import IconButton from "./IconButton";

import { SCHEDULE_CARD, HEADER_BUTTON } from "../../utils/scheduleStyles";

export default function CourseSchedule() {
  const [selected, setSelected] = useState(23);

  return (
    <section className={SCHEDULE_CARD}>
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-text)]">
            Course Schedule
          </h3>

          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
            Here's your schedule activity for today
          </p>
        </div>

        <IconButton className={HEADER_BUTTON}>
          <MoreHorizontal size={16} />
        </IconButton>
      </div>

      {/* Date Grid */}
      <div className="grid grid-cols-5 gap-2 mb-6">
        {DATES.map((date) => (
          <DateCard
            key={`${date.month}-${date.day}`}
            day={date.day}
            month={date.month}
            active={selected === date.day}
            onClick={() => setSelected(date.day)}
          />
        ))}
      </div>

      {/* People */}
      <div className="space-y-1">
        {PEOPLE.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </section>
  );
}