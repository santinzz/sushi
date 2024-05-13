const Heading = ({
  children,
  className,
  as: Component = 'h1',
}: {
  children: React.ReactNode,
  className?: string
  as?: React.ElementType
}) => {
  return (
    <Component className={`yeseva text-green max-w-[640px] ${className}`}>
      {children}
    </Component>
  )
}

export default Heading
