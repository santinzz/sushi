import { createLazyFileRoute } from '@tanstack/react-router'
import Hero from '../components/hero'

export const Route = createLazyFileRoute('/' as never)({
  component: Index,
})

function Index() {
  return (
    <main className='p-2 background'>
      <Hero />
      <section className='flex flex-col items-center pt-32 gap-6'>
        <img src="/palillos.svg" alt="Palillos" className='w-24 h-auto'/>
        <h2 className='text-7xl yeseva text-green'>Nuestros Platillos Especiales</h2>
        <p className='text-gray-600'>
          Ven y déjate sorprender por nuestra oferta única de sabores auténticos y deliciosos.
        </p>
      </section>
    </main>
  )
}
