import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4";
}) => {
  const Tag = as;

  return <Tag className={cn("text-2xl max-w-xl md:text-4xl lg:text-6xl tracking-tight font-sans", className)}>{children}</Tag>;
};

export default Heading;
