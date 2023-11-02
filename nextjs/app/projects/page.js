import Image from 'next/image';
import BackGround from '@/components/Background';
import globalStyles from '@/styles/Global.module.scss';
import ProjectPage from '@/components/projects/ProjectPage';

export const metadata = {
  title: 'Projects: Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Projects(){

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main>
      <ProjectPage globalStyles={globalStyles}/>
    </main>
    </>
  )
}