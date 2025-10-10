import { Check } from "lucide-react";
import { LIProps } from "@/types";

export function LI({ children }: LIProps) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 size-4 shrink-0 text-indigo-300" />
      <span>{children}</span>
    </li>
  );
}
