import Image from 'next/image';
import BackGround from '@/components/Background';
import globalStyles from '@/styles/Global.module.scss';
import Navigation from '@/components/Navigation';
import ProjectPage from '@/components/projects/ProjectPage';

export const metadata = {
  title: 'Projects: Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Projects(){

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main className={[globalStyles.page, 'relative w-screen h-screen flex'].join(' ')}>
      <ProjectPage globalStyles={globalStyles}/>
      <Navigation styles={ globalStyles }/>
    </main>
    </>
  )
}