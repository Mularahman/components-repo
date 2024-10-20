import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import '../libs/tailwind.css'
import { cn } from '../utils/utils'

const chipVariants = cva('relative grid select-none items-center whitespace-nowrap font-bold', {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:opacity-90',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-white hover:opacity-90',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-10 rounded-xl py-2 px-3',
      sm: 'h-9 rounded-xl py-1.5 px-3',
      lg: 'h-11 rounded-xxl py-1.5 px-5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps extends ButtonHTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {}

const Chip = forwardRef<HTMLDivElement, ButtonProps>(({ className, variant, size, ...props }, ref) => {
  return <div className={cn(chipVariants({ variant, size, className }))} ref={ref} {...props} />
})

Chip.displayName = 'Chip'

export { Chip, chipVariants }
