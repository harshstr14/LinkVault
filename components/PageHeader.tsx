import { cn } from "@/lib/utils";
import React from "react";

export default function PageHeader({
  title,
  description,
  icon,
  className,
  sm,
}: {
  title: string;
  description?: string;
  icon: string;
  className?: string;
  sm?: boolean;
}) {
  return (
    <div
      className={cn("flex items-center", className, !sm ? "gap-3" : "gap-2")}
    >
      <i
        className={cn("text-primary drop-shadow", icon, !sm && "text-2xl")}
      ></i>
      <div>
        <p
          className={cn(
            "capitalize font-semibold tracking-tight",
            !sm && "text-2xl"
          )}
        >
          {title}
        </p>
        <p className="text-xs sm:text-sm text-base-content/60">{description}</p>
      </div>
    </div>
  );
}
