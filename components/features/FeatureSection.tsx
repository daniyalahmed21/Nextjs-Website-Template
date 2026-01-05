import AgentList from "./AgentList";
import FeatureCard from "./FeatureCard";
import WorkflowList from "./WorkflowList";
import ShieldCard from "./ShieldCard";

export default function FeatureSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <FeatureCard
        className="sm:rounded-tl-4xl sm:rounded-bl-4xl overflow-hidden"
        title="Monitoring That Fits Your Production Stack"
      >
        <div className="absolute bg-white/70 h-[70%]  mask-r-from-0% w-full z-50"></div>
        <AgentList />
      </FeatureCard>

      <FeatureCard title="Alerts That Escalate Only When It Matters">
        {/* <WorkflowList /> */}
      </FeatureCard>

      <FeatureCard
        className="sm:rounded-tr-4xl sm:rounded-br-4xl"
        title="Every Action Logged. Fully Auditable."
      >
        <ShieldCard />
      </FeatureCard>
    </section>
  );
}
