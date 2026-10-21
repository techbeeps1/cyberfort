import { cn } from "@/lib/utils";

export function Container({ className, children, ...props }) {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
}
