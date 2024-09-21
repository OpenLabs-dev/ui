import { cva } from 'class-variance-authority'

/**
 * Label wrapper **Class Variants** component
 *
 * const styles = label({})
 *
 * @example
 * <Label role="label" className={styles())}>
 *   // button elements
 * </Label>
 */
export const label = cva(
  'font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-md',
        lg: 'text-lg',
      },
      variant: {
        none: 'text-foreground/70',
        default: 'text-default/80',
        primary: 'text-primary/80',
        success: 'text-success/80',
        warn: 'text-warn/80',
        error: 'text-error/80',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'none',
    },
  },
)
