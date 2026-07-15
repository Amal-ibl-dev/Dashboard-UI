import React from "react";
import { STAT_CARD } from "../../utils/overviewStyles"

export default function StatCard({ stat }) {
  const Icon = stat.icon;

  return (
    <div className={STAT_CARD}>
      <div
        className={`w-10 h-10 rounded-full ${stat.iconBg} flex items-center justify-center mb-8`}
      >
        <Icon
          size={17}
          className="text-white"
        />
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
        {stat.label}
      </p>

      <p className="text-2xl font-bold text-zinc-900 dark:text-white">
        {stat.value}
        <span className="text-zinc-300 dark:text-zinc-600">
          /{stat.total}
        </span>
      </p>
    </div>
  );
}