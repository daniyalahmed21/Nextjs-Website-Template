import { cn } from "@/lib/utils";
import {
  BadgeAlert,
  CircleCheck,
  Clock4,
  EqualApproximately,
  ScanHeart,
} from "lucide-react";
import { ReactNode } from "react";

/* ----------------------------- data ----------------------------- */

const agents = [
  {
    name: "Heartbeat Monitoring",
    time: "30s",
    color: "bg-emerald-500/10 text-emerald-400",
    className: "bottom-20 left-0",
    icon: <ScanHeart size={15} />,
  },
  {
    name: "Incident Detection",
    time: "12s",
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

/* --------------------------- wrapper ---------------------------- */

export default function AgentList() {
  return (
    <div
      style={{
        transform: "rotateX(30deg) rotateY(-20deg) rotateZ(15deg) scale(1.2)",
      }}
      className={cn(
        "relative overflow-hidden perspective-distant",
        "min-h-70 w-full",
        "sm:translate-x-10 translate-x-5",
        "-translate-y-5"
      )}
    >
      {agents.map((agent) => (
        <AgentCard key={agent.name} agent={agent} />
      ))}
    </div>
  );
}

/* -------------------------- components -------------------------- */

function AgentBadge({ time, color }: { time: string; color: string }) {
  return (
    <span
      className={cn(
        "ml-auto rounded text-[11px]",
        "flex items-center gap-1",
        "px-1 py-0.5",
        color
      )}
    >
      <Clock4 size={12} />
      <EqualApproximately size={12} />
      {time}
    </span>
  );
}

function AgentHeader({
  icon,
  name,
  time,
  color,
}: {
  icon: ReactNode;
  name: string;
  time: string;
  color: string;
}) {
  return (
    <div className={cn("flex items-center gap-1")}>
      <span>{icon}</span>

      <span className={cn("text-xs font-semibold text-neutral-600 sm:text-sm")}>
        {name}
      </span>

      <AgentBadge time={time} color={color} />
    </div>
  );
}

function AgentTags({ tags }: { tags: string[] }) {
  return (
    <div className={cn("mt-3", "flex gap-1")}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn(
            "rounded bg-neutral-200 px-1.5 py-0.5 text-[11px] font-semibold text-neutral-600"
          )}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function AgentCard({ agent }: { agent: (typeof agents)[number] }) {
  return (
    <div
      className={cn(
        "absolute mx-auto  rounded-md ",
        "shadow-md bg-white",
        "h-fit w-[80%]",
        "space-y-1.5 p-2.5",
        agent.className
      )}
    >
      <AgentHeader
        icon={agent.icon}
        name={agent.name}
        time={agent.time}
        color={agent.color}
      />

      <p className={cn("text-[13px] leading-snug text-neutral-400")}>
        Creates real-time monitoring workflows using heartbeats logs metrics and
        historical incidents.
      </p>

      <AgentTags tags={["Uptime", "Logs", "Metrics"]} />
    </div>
  );
}
