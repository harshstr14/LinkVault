import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function SidebarHighlightLink({
  title,
  href,
  icon,
  active,
  external,
  sidebarIsCollapsed,
  expanded,
  onToggleExpand,
}: {
  title: string;
  href: string;
  icon: string;
  active?: boolean;
  external?: boolean;
  sidebarIsCollapsed?: boolean;
  expanded?: boolean;
  onToggleExpand?: () => void;
}) {
  const showToggle = Boolean(onToggleExpand) && !sidebarIsCollapsed;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href={href}
            title={title}
            target={external ? "_blank" : undefined}
          >
            <div
              className={cn(
                active
                  ? "bg-primary/15 text-base-content shadow-sm"
                  : "hover:bg-base-content/5 text-base-content/80",
                "group transition-colors cursor-pointer flex items-center gap-2.5 capitalize py-1",
                sidebarIsCollapsed ? "rounded-lg h-8 w-8" : "rounded-xl px-3"
              )}
            >
              {sidebarIsCollapsed ? (
                <i
                  className={cn(
                    icon,
                    "text-primary text-lg drop-shadow w-full text-center"
                  )}
                ></i>
              ) : (
                <span className="relative flex items-center shrink-0">
                  <i
                    className={cn(
                      icon,
                      "text-primary text-lg drop-shadow",
                      showToggle && "group-hover:opacity-0 duration-100"
                    )}
                  ></i>
                  {showToggle && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onToggleExpand?.();
                      }}
                      aria-expanded={expanded}
                      className="absolute inset-0 hidden group-hover:flex items-center justify-center"
                    >
                      <i
                        className={cn(
                          expanded
                            ? "bi-caret-down-fill"
                            : "bi-caret-right-fill",
                          "opacity-50 hover:opacity-100 duration-200"
                        )}
                      ></i>
                    </button>
                  )}
                </span>
              )}
              {!sidebarIsCollapsed && (
                <p className="truncate w-full font-semibold text-[13px]">{title}</p>
              )}
            </div>
          </Link>
        </TooltipTrigger>
        {sidebarIsCollapsed && (
          <TooltipContent side="right">{title}</TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
