import React from 'react'

const Paragraph = ({
  children,
  className
} : {
  children: React.ReactNode,
  className?: string
}) => {
  return (
    <p className={`text-gray-600 max-w-[600px] text-lg font-medium ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph