import { ShieldCheck } from "lucide-react";

export default function ShieldCard() {
  return (
    <div className="flex items-center justify-center h-40">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
        <ShieldCheck className="h-10 w-10 text-emerald-400" />
      </div>
    </div>
  );
}
