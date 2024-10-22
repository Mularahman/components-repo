import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Root } from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'
import { cn } from '../utils/utils'

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70')

const labelRequired = "after:content-['*'] after:text-red-500"

type LabelProps = {
  required?: boolean
}

const Label = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root> & VariantProps<typeof labelVariants> & LabelProps
>(({ className, required, ...props }, ref) => (
  <Root ref={ref} className={cn(labelVariants(), required && labelRequired, className)} {...props} />
))

Label.displayName = Root.displayName

export { Label }
