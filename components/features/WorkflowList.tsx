// components/WorkflowList.tsx
const steps = [
  { label: "Fetching Signals", time: "~10s", done: true },
  { label: "Correlating Events", time: "~20s", done: true },
  { label: "Evaluating Thresholds", time: "~30s", done: true },
  { label: "Triggering Alerts", time: "~40s", done: true },
  { label: "Generating Incident Report", time: "~50s", done: false },
];

export default function WorkflowList() {
  return (
    <div className="space-y-3">
      {steps.map(step => (
        <div
          key={step.label}
          className="flex items-center justify-between rounded-lg bg-zinc-800/70 px-4 py-2"
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                step.done ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            <span className="text-sm text-zinc-200">{step.label}</span>
          </div>
          <span className="text-xs text-zinc-400">{step.time}</span>
        </div>
      ))}
    </div>
  );
}
