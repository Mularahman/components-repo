import React from 'react';
import '../libs/tailwind.css';

type ButtonProps = {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = ({ variant = 'default', children, onClick, className }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-white hover:opacity-90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}

export default Button
