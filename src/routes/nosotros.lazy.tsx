import { createLazyFileRoute } from '@tanstack/react-router'
import Heading from '../components/utils/heading'
import Paragraph from '../components/utils/paragraph'

export const Route = createLazyFileRoute('/nosotros' as never)({
  component: Nosotros,
})

function Nosotros() {
  return (
    <div>
      <section className='eating-sushi-background grid place-items-center h-[800px] relative'>
        <div className='decorator-background absolute top-0 left-0 w-full bg-repeat-x z-10 h-20'></div>
        <div className='flex flex-col items-center gap-4'>
          <img src='/palillos.svg' alt='Palillos' />
          <Heading className='text-white text-center'>
            Sigue el sabor de Japón
          </Heading>
          <Paragraph className='text-2xl px-4 py-2 bg-gradient-to-t from-orange/60 to-transparent shadow-2xl shadow-orange/60 text-white rounded-lg text-center'>
            Conoce mas sobre nuestra historia y la pasión que ponemos en cada
            uno.
          </Paragraph>
        </div>
        <div className='decorator-2-background absolute bottom-[-2px] left-0 w-full bg-repeat-x z-10 h-20 bg-transparent'></div>
      </section>
    </div>
  )
}
