import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import ApplyNowModal from "./ApplyNowModal";

interface ApplyNowButtonProps {
  /** Visual variant — matches the page context */
  variant?: "primary" | "accent" | "outline-white";
  className?: string;
  label?: string;
  showArrow?: boolean;
}

/**
 * Drop-in "Apply Now" button that opens the application modal.
 * Use variant="accent" on dark/hero backgrounds, "primary" on light backgrounds.
 */
export default function ApplyNowButton({
  variant = "accent",
  className,
  label = "Apply Now",
  showArrow = true,
}: ApplyNowButtonProps) {
  const [open, setOpen] = useState(false);

  const base =
    "inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm font-body transition-all duration-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  const variants = {
    accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-[1.02]",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02]",
    "outline-white":
      "border border-white/40 text-white hover:bg-white/10 hover:border-white/60",
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={cn(base, variants[variant], className)}
        aria-haspopup="dialog"
      >
        {label}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </button>

      <ApplyNowModal open={open} onOpenChange={setOpen} />
    </>
  );
}
