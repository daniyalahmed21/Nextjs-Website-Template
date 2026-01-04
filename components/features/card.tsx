import React from "react";

export const Card = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
      <h4 className="text-xl font-semibold mb-3"></h4>
      <p className="text-muted-foreground leading-relaxed"></p>
    </div>
  );
};
