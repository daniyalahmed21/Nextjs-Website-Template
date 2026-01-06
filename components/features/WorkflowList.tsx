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

const StepStatus = ({ done }: { done: boolean }) => {
  const containerClasses = cn(
    "relative flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
    done ? "bg-emerald-500" : "bg-amber-500/15"
  );

  const iconClasses = done ? "text-white" : "animate-spin text-amber-500";

  return (
    <div className={containerClasses}>
      {done ? (
        <Check size={10} className={iconClasses} />
      ) : (
        <LoaderCircle size={12} className={iconClasses} />
      )}
    </div>
  );
};

const StepRow = ({
  step,
  isLast,
}: {
  step: (typeof steps)[number];
  isLast: boolean;
}) => {
  const layoutClasses = "flex flex-col flex-1 justify-center";
  const contentClasses = "flex items-center justify-between px-2 py-1";
  const labelGroupClasses = "flex items-center gap-2";
  const typographyClasses = "text-[11px] sm:text-xs font-medium text-neutral-600 truncate";
  const metaClasses = "flex items-center gap-1 text-[9px] text-neutral-400 font-mono";

  return (
    <div className={layoutClasses}>
      <div className={contentClasses}>
        <div className={labelGroupClasses}>
          <StepStatus done={step.done} />
          <span className={typographyClasses}>{step.label}</span>
        </div>

        <div className={metaClasses}>
          <EqualApproximately size={10} />
          {step.time}
        </div>
      </div>
      {!isLast && <div className="mx-2 h-px bg-neutral-100" />}
    </div>
  );
};

const CardHeader = () => {
  const containerClasses = "flex items-center gap-1.5 mb-3 px-1";
  const textClasses = "text-[11px] font-bold uppercase tracking-wider text-neutral-500";

  return (
    <div className={containerClasses}>
      <CircleCheck size={16} className="text-neutral-500" />
      <span className={textClasses}>Alert Intelligence</span>
    </div>
  );
};

const BackgroundLayer = ({ children }: { children: React.ReactNode }) => {
  const containerClasses = cn(
    "relative h-[210px] w-full border border-neutral-100 bg-neutral-100"
  );
  const patternClasses = cn(
    "absolute inset-0 rounded-2xl opacity-20",
    "bg-[image:repeating-linear-gradient(315deg,_#000_0,_#000_1px,_transparent_0,_transparent_50%)]",
    "bg-[size:8px_8px]"
  );

  return (
    <div className={containerClasses}>
      <div className={patternClasses} />
      {children}
    </div>
  );
};

export default function WorkflowList() {
  const outerWrapper = "overflow-hidden h-70 w-full flex justify-center items-center";
  const cardClasses = cn(
    "group relative mx-auto w-full max-w-[320px] rounded-xl p-3 transition-all duration-500",
    "flex flex-col",
    "sm:[transform:rotateX(40deg)_rotateY(20deg)_rotateZ(-20deg)]",
    "perspective-distant",
    "border border-neutral-200"
  );

  const foregroundClasses = cn(
    "absolute inset-0 w-full h-full rounded-2xl bg-neutral-100 shadow-sm border border-neutral-200",
    "p-1.5 transition-all duration-500 ease-out flex flex-col justify-between",
    "sm:translate-x-3 sm:-translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0"
  );

  return (
    <div className={outerWrapper}>
      <div className={cardClasses}>
        <CardHeader />
        <BackgroundLayer>
          <div className={foregroundClasses}>
            {steps.map((step, index) => (
              <StepRow
                key={step.label}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </BackgroundLayer>
      </div>
    </div>
  );
}