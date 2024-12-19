import { TrendingDown, TrendingUp } from "lucide-react";

interface StatCardProps {
  icon: any;
  label: string;
  value: string | number;
  changePercent: number;
}

export default function StatCard({
  label,
  value,
  changePercent,
  ...rest
}: StatCardProps) {
  return (
    <div className="bg-white p-3 sm:p-6 rounded-lg sm:rounded-3xl border-[0.5px] drop-shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        {rest.icon && <rest.icon className="size-3 text-gray-500" />}
        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
          {label}
        </p>
      </div>
      <p className="text-xl sm:text-2xl font-semibold mt-2">{value}</p>
      <div className="flex items-center gap-1 mt-2">
        {changePercent < 0 ? (
          <TrendingDown className="size-4 sm:size-5 text-red-500" />
        ) : (
          <TrendingUp className="size-4 sm:size-5 text-green-500" />
        )}
        <p
          className={`text-xs sm:text-sm ${
            changePercent > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {Math.abs(changePercent)}%{" "}
          <span className="text-gray-500">
            {changePercent > 0 ? "increase" : "decrease"}
          </span>
        </p>
      </div>
    </div>
  );
}
