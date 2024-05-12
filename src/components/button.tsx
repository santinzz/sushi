import React from 'react'

interface ButtonProps {
  variant: 'green' | 'orange'
  children: React.ReactNode
  className?: string
}

const Button = ({ variant = "green", children, className }: ButtonProps) => {
  return (
    <button className={`text-white px-6 py-3 duration-200 hover:opacity-80 rounded-lg rounded-tr-none rounded-bl-none bebas text-xl ${variant === 'green' ? 'bg-green': 'bg-orange'} ${className}`}>
      {children}
    </button>
  )
}

export default Button