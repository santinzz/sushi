import Heading from "./utils/heading"
import Paragraph from "./utils/paragraph"

const FoodItem = ({
  name,
  description,
  price,
}: {
  name: string
  description: string
  price: number
}) => {
  return (
    <section className='flex items-center gap-8'>
      <div className='grid gap-4 pt-6'>
        <Heading className='text-3xl'>{name}</Heading>
        <Paragraph className='max-w-[350px] text-[17px] font-normal'>
          {description}
        </Paragraph>
      </div>
      <div>
        <span className='text-green yeseva text-lg'>${price}MX</span>
      </div>
    </section>
  )
}

export default FoodItem
