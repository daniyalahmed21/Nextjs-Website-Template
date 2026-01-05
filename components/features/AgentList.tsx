import { cn } from "@/lib/utils";
import {
  BadgeAlert,
  CircleCheck,
  Clock4,
  EqualApproximately,
  ScanHeart,
} from "lucide-react";

const agents = [
  {
    name: "Heartbeat Monitoring",
    time: "~30s",
    color: "bg-emerald-500/10 text-emerald-400",
    className: "bottom-20 left-0",
    icon: <ScanHeart size={15} />,
  },
  {
    name: "Incident Detection",
    time: "~12s",
    color: "bg-sky-500/10 text-sky-400",
    className: "bottom-10 left-5",
    icon: <BadgeAlert size={15} />,
  },
  {
    name: "Alert Intelligence",
    time: "90s",
    color: "bg-rose-500/10 text-rose-400",
    className: "bottom-0 left-10",
    icon: <CircleCheck size={15} />,
  },
];

export default function AgentList() {
  return (
    <div
      style={{
        transform: "rotateX(28deg) rotateY(-18deg) rotateZ(16deg) scale(1.2)",
      }}
      className="translate-x-10  relative w-full min-h-72 perspective-distant overflow-hidden"
    >
      {agents.map((agent) => (
        <div
          key={agent.name}
          className={cn(
            "absolute h-fit mx-auto w-[80%] p-2.5 space-y-1.5 shadow-md rounded-md bg-white",
            agent.className
          )}
        >
          <div className="flex items-center gap-2">
            <span>{agent.icon}</span>

            <span className=" text-xs sm:text-sm text-neutral-600 font-semibold">
              {agent.name}
            </span>
            <span
              className={cn(
                "ml-auto flex gap-1 items-center text-[11px] px-1.5 py-0.5 rounded",
                agent.color
              )}
            >
              <Clock4 size={12} />
              <EqualApproximately size={12} />
              {agent.time}
            </span>
          </div>

          <p className="text-[13px] leading-snug text-neutral-400">
            Creates real-time monitoring workflows using heartbeats logs metrics
            and historical incidents.
          </p>

          <div className="flex gap-2 mt-3">
            {["Uptime", "Logs", "Metrics"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-semibold rounded bg-neutral-200 px-1.5 py-0.5 text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
