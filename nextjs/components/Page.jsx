'use client'
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

import Hero from '@/components/Hero';
import ProjectPage from "./projects/ProjectPage";
import AboutPage from "./about/AboutPage";

import useVisualMode from "@/utils/helpers/useVisualMode";

export default function Page({styles}){
  const [mode, transition] = useVisualMode('index');

  return(
    <main className={[styles.page, 'w-full h-screen flex items-center'].join(' ')}>
      <Navigation styles={ styles } transition={ transition }/>
      <MobileNavigation styles={ styles } transition={ transition }/>

      { mode === 'INDEX' && <Hero />}
      { mode === 'PROJECTS' && <ProjectPage globalStyles={ styles }/> }
      { mode === 'ABOUT' && <AboutPage globalStyles={ styles }/> }
    </main>
  );
};