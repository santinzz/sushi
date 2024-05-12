import { createLazyFileRoute } from '@tanstack/react-router'
import Heading from '../components/utils/heading'
import Paragraph from '../components/utils/paragraph'
import FoodItem from '../components/food-item'

export const Route = createLazyFileRoute('/menu' as never)({
  component: Menu,
})

function Menu() {
  return (
    <div className='p-2'>
      <section className='flex flex-col items-center pt-20 gap-4 pb-20'>
        <img src='/palillos.svg' alt='Palillos' />
        <Heading className='text-center'>Disfruta el sabor de Japón</Heading>
        <Paragraph className='text-xl font-medium'>
          Ven y descubre el verdadero sabor de Japón en cada delicioso bocado.
        </Paragraph>
      </section>
      <img src='/sushivw.webp' alt='Sushi' />

      <section className='pt-32'>
        <article className='w-[1200px] mx-auto bg-white rounded-lg p-16 flex'>
          <section className='space-y-8 w-1/2'>
            <img loading='lazy' src='palillos.svg' alt='Palillos chinos' />
            <Heading>Futomaki</Heading>
            <Paragraph className='text-green text-lg max-w-[500px]'>
              El Futomaki es una variedad de sushi tipo maki, que se diferencia
              de otros tipos de sushi por su tamaño y contenido.
            </Paragraph>

            <section className='divide-y-2 divide-orange/70 divide-dashed flex flex-col items-start gap-8'>
              <FoodItem 
                name='Yellow Roll'
                description='Una deliciosa creación que combina la suavidad del aguacate con la textura crujiente del camarón empanizado.'
                price={120.00}
              />
              <FoodItem 
                name='Salmon Skin Roll'
                description='Una combinación única de pepino, anguila y chicharrón de salmón, coronado con ajonjolí y katsuobushi.'
                price={140.00}
              />
              <FoodItem 
                name='Wasabi Roll'
                description='La frescura de los brotes y el crujiente del masago, acompañado de una deliciosa mayonesa wasabi o chipotle.'
                price={165.00}
              />
            </section>
          </section>
          <section className='w-1/2'>
            <img
              className='w-full'
              loading='lazy'
              src='/sushi-menu1.svg'
              alt='Imagen para el menu sushi'
            />
          </section>
        </article>
      </section>
    </div>
  )
}
