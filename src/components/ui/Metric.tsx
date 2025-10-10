import { MetricProps } from "@/types";

export function Metric({ icon, label, value }: MetricProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-white/70">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <div className="mt-2 text-lg font-semibold">{value}</div>
    </div>
  );
}
