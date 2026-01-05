import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Plus } from "lucide-react";

type Props = {
  title: string;
  children?: ReactNode;
  className?: string;
};

export default function FeatureCard({ title, children, className }: Props) {
  return (
    <div className={cn("relative rounded-md bg-neutral-50 shadow", className)}>
      <div className="mb-6 min-h-60">{children}</div>

      <div className="px-6 py-7 flex justify-between gap-4 items-center">
        <h3 className=" text-xl sm:text-2xl font-bold  text-neutral-800 font-sans">
          {title}
        </h3>
        <Plus
          size={30}
          className="cursor-pointer hover:scale-90 transition-transform duration-300"
        />
      </div>
    </div>
  );
}
