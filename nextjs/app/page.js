import BackGround from '@/components/Background';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';
import Hero from '@/components/Hero';
import globalStyles from '@/styles/Global.module.scss';

export const metadata = {
  title: 'Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Home() {

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main className={[globalStyles.page, 'w-full h-screen flex items-center'].join(' ')}>
      <Hero />
      <Navigation styles={ globalStyles }/>
      <MobileNavigation styles={ globalStyles }/>
    </main>
    </>
  )
}
