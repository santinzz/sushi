import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import Button from '../components/button'

export const Route = createRootRoute({
  component: () => (
    <>
      <header className='max-w-7xl mx-auto w-full px-4 py-2 flex gap-2 background items-center justify-between'>
        <nav>
          <img src='/sushi.svg' alt='sushi' className='w-20 h-auto' />
        </nav>
        <nav className='bebas green font-medium text-xl flex gap-8'>
          <Link
            to='/'
            className='[&.active]:text-orange flex gap-1 items-center'
          >
            <div className='w-3 h-[3px] bg-current'></div> Inicio
          </Link>
          <Link
            to='/menu'
            className='[&.active]:text-orange flex gap-1 items-center'
          >
            <div className='w-3 h-[3px] bg-current'></div> Menu
          </Link>
          <Link
            to='/nosotros'
            className='[&.active]:text-orange flex gap-1 items-center'
          >
            <div className='w-3 h-[3px] bg-current'></div> Nosotros
          </Link>
        </nav>
        <nav>
          <Button variant='green'>
            Reservar Mesa
          </Button>
        </nav>
      </header>
      <Outlet />
    </>
  ),
})
