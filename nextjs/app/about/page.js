import BackGround from '@/components/Background';
import Navigation from '@/components/Navigation';
import MobileNavigation from '@/components/MobileNavigation';
import globalStyles from '@/styles/Global.module.scss';
import AboutMe from '@/components/about/AboutMe';
import styles from '@/styles/About.module.scss';

export const metadata = {
  title: 'About Me: Paul Bodner Portfolio',
}

export default function About() {

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main className={[globalStyles.page, 'w-full h-screen max-h-screen'].join(' ')}>
      <AboutMe styles={ styles }/>
      <Navigation styles={ globalStyles }/>
      <MobileNavigation styles={ globalStyles } />
    </main>
    </>
  )
}