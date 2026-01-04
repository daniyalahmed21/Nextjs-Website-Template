import { cn } from "@/lib/utils";
import React from "react";

const SubHeading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "p" | "h2" | "h3" | "h4";
}) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        "text-base max-w-xl md:lg text-neutral-400 tracking-tight font-display",
        className
      )}
    >
      {children}
    </Tag>
  );
};

export default SubHeading;
