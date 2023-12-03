'use client'
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navigation from "./Navigation";
import Hero from '@/components/Hero';
import ProjectPage from "./projects/ProjectPage";
import AboutPage from "./about/AboutPage";
import ResumePage from "./resume/ResumePage";
import ContactPage from "./Contact/ContactPage";

import useVisualMode from "@/utils/helpers/useVisualMode";

export default function Page({styles}){
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const [mode, transition] = useVisualMode('index');

  useEffect(()=>{
  })

  return(
    <main className={[styles.page, 'w-full h-screen flex'].join(' ')}>
      {/* <MobileNavigation styles={ styles } transition={ transition }/> */}

      <motion.div className="relative h-screen"
        animate={{ width: showMenuObj.show ? 'calc(100vw - 125px)' : 'calc(100vw - 51px)' }}
      >
        { mode === 'INDEX' && <Hero/> }
        { mode === 'PROJECTS' && <ProjectPage globalStyles={ styles }/> }
        { mode === 'ABOUT' && <AboutPage globalStyles={ styles }/> }
        { mode === 'RESUME' && <ResumePage globalStyles={  styles }/> }
        { mode === 'CONTACT' && <ContactPage globalStyles={  styles }/> }
      </motion.div>
      <Navigation 
        styles={ styles } 
        transition={ transition }
        showMenuObj={ showMenuObj }
        setShowMenuObj = { setShowMenuObj }
        />
    </main>
  );
};