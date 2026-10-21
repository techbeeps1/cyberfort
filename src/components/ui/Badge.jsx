import { cn } from "@/lib/utils";

const badgeVariants = {
  default:
    "border-transparent bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900",
  secondary:
    "border-transparent bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
  outline:
    "border-zinc-300 text-zinc-800 dark:border-zinc-700 dark:text-zinc-200",
  success:
    "border-emerald-500/20 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300",
  green:
    "border-green/30 bg-green/10 text-green",
  lightBlue:
    "border-light-blue/30 bg-light-blue/10 text-light-blue",
  darkBlue:
    "border-dark-blue/30 bg-dark-blue/10 text-dark-blue dark:text-sky-300",
};

export function Badge({ className, variant = "default", children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
        badgeVariants[variant] || badgeVariants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
