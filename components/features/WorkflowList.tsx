import { cn } from "@/lib/utils";
import {
  EqualApproximately,
  Check,
  LoaderCircle,
  CircleCheck,
} from "lucide-react";

const steps = [
  { label: "Fetching Signals", time: "10s", done: true },
  { label: "Correlating Events", time: "20s", done: true },
  { label: "Evaluating Thresholds", time: "30s", done: true },
  { label: "Triggering Alerts", time: "40s", done: true },
  { label: "Generating Incident Report", time: "50s", done: false },
];

export default function WorkflowList() {
  return (
    <div className="overflow-hidden h-70 w-full flex justify-center items-center">
      <Background />
    </div>
  );
}

const Background = () => {
  return (
    <div
      className={cn(
        " group relative mx-auto w-full max-w-[320px] rounded-xl p-3 transition-all duration-500",
        "flex flex-col",
        "sm:[transform:rotateX(40deg)_rotateY(20deg)_rotateZ(-20deg)]",
        "perspective-distant",
        "border border-neutral-200"
      )}
    >
      <div className="flex items-center gap-1.5 mb-3 px-1">
        <CircleCheck size={16} className="text-neutral-500" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
          Alert Intelligence
        </span>
      </div>

      <div className="relative h-[210px] w-full  border border-neutral-100 bg-neutral-100 ">
        <div className="absolute  inset-0  rounded-2xl opacity-20 bg-[image:repeating-linear-gradient(315deg,_#000_0,_#000_1px,_transparent_0,_transparent_50%)] bg-[size:8px_8px]" />
        <ForeGround />
      </div>
    </div>
  );
};

const ForeGround = () => {
  return (
    <div
      className={cn(
        "absolute inset-0 w-full h-full rounded-2xl bg-neutral-100 shadow-sm border border-neutral-200",
        "p-1.5 transition-all duration-500 ease-out flex flex-col justify-between",
        "sm:translate-x-3 sm:-translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0"
      )}
    >
      {steps.map((step, index) => (
        <div key={step.label} className="flex flex-col flex-1 justify-center">
          <div className="flex items-center justify-between px-2 py-1">
            <div className="flex items-center gap-2">
              <CircleBadge step={step} />
              <span className="text-[11px] sm:text-xs font-medium text-neutral-600 truncate">
                {step.label}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
              <EqualApproximately size={10} />
              {step.time}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div className="mx-2 h-px bg-neutral-100" />
          )}
        </div>
      ))}
    </div>
  );
};

const CircleBadge = ({ step }: { step: (typeof steps)[number] }) => {
  return (
    <div className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full">
      {step.done ? (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-emerald-500">
          <Check size={10} className="text-neutral-400" />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-amber-500/15">
          <LoaderCircle size={12} className="animate-spin text-amber-500" />
        </div>
      )}
    </div>
  );
};
