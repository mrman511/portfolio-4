import Image from 'next/image';
import BackGround from '../components/Background';
import Navigation from '../components/Navigation';
import Hero from '@/components/Hero';
import globalStyles from '../styles/Global.module.scss';

export default function Home() {
  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main>
      <section className='w-full h-screen flex items-center'>
        <Hero />
        <Navigation styles={ globalStyles }/>
      </section>
    </main>
    </>
  )
}
