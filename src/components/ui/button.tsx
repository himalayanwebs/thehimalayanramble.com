import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

// NOTE on brand variants ("accent" / "brand-ghost"): shadcn's stock variants share a
// `size`-driven box model (fixed h-9/px-4/py-2, rounded-md, gap-2, text-sm, whitespace-nowrap).
// The brand button (DESIGN.md) uses an entirely different, em-based box model (padding
// scales with its own font-size, wraps instead of forcing nowrap — a real mobile-overflow
// bug this fixed earlier). Rather than fight Tailwind's cascade layers (utilities always
// beat @layer components, regardless of source order), box-model utilities that would
// conflict live only on the 6 stock variants below, not in the shared base — and brand
// variants always pair with size="brand"/"brand-sm" (empty/hit-area-only), never a stock
// size, so nothing from the size axis ever reaches a brand button.
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center transition-all outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
        outline:
          "gap-2 rounded-md text-sm font-medium whitespace-nowrap border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "gap-2 rounded-md text-sm font-medium whitespace-nowrap bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "gap-2 rounded-md text-sm font-medium whitespace-nowrap hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "gap-2 rounded-md text-sm font-medium whitespace-nowrap text-primary underline-offset-4 hover:underline",
        // Brand variants — see .btn-base/.btn-accent/.btn-brand-ghost in globals.css.
        // Distinct names from shadcn's own "default"/"ghost" so internal shadcn
        // components (Sheet, Dialog, etc.) that reach for stock variants are unaffected.
        accent: "btn-base btn-accent",
        "brand-ghost": "btn-base btn-brand-ghost",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        // Brand sizes — box model comes entirely from .btn-base/.btn-sm in globals.css.
        brand: "",
        "brand-sm": "btn-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
