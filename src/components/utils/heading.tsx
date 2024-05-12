const Heading = ({
  children,
  className
}: {
  children: React.ReactNode,
  className?: string
}) => {
  return (
    <h1 className={`yeseva text-green text-7xl max-w-[640px] ${className}`}>
      {children}
    </h1>
  )
}

export default Heading
