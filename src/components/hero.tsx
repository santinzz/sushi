import Button from './button'
import RightArrow from './right-arrow'
import Heading from './utils/heading'
import Paragraph from './utils/paragraph'

const Hero = () => {
  return (
    <section className='max-w-7xl w-full mx-auto px-4 flex pt-36'>
      <section className='space-y-4 pt-10'>
        <Heading className='text-7xl'>Disfruta el completo sabor de Japón</Heading>
        <Paragraph>
          Desde los clásicos nigiri y sashimi hasta nuestras innovadoras
          creaciones de rollos, cada plato está meticulosamente elaborado para
          ofrecerte una experiencia gastronómica que trasciende lo ordinario.
        </Paragraph>
        <Button variant='orange' className='flex gap-2 items-center'>
          Nuestro restaurante <RightArrow />
        </Button>
      </section>
      <section>
        <img src='/sushiss.webp' alt='Muchos sushis' />
      </section>
    </section>
  )
}

export default Hero
