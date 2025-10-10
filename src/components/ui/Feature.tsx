import { FeatureProps } from "@/types";

export function Feature({ icon, title, desc }: FeatureProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2">
        <span className="text-indigo-200">{icon}</span>
        <h4 className="text-sm font-semibold">{title}</h4>
      </div>
      <p className="mt-2 text-xs text-white/70">{desc}</p>
    </div>
  );
}
