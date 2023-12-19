'use client'
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navigation from "./Navigation";
import Hero from '@/components/Hero';
import ProjectPage from "./projects/ProjectPage";
import AboutPage from "./about/AboutPage";
import ResumePage from "./resume/ResumePage";
import ContactPage from "./Contact/ContactPage";

import useVisualMode from "@/utils/helpers/useVisualMode";

export default function Page({styles}){
  const [screenWidth, setScreenWidth] = useState(getCurrentWidth());
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const [mode, transition] = useVisualMode('index');
  const page = useRef();

  function getCurrentWidth(){
    return window.innerWidth
  }
  
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth())
    }
    window.addEventListener('resize', updateWidth);
    
    return(() => {
      window.removeEventListener('resize', updateWidth);
    })
  })

  return(
    <main ref={ page } className={[styles.page, 'w-full h-screen flex'].join(' ')}>
      <AnimatePresence initial={ false }>
        <motion.div className="relative h-screen"
          key='main-page'
          initial={{ 
            width: `${screenWidth-125}px`,
            left: `${125/2}px`,
          }}
          animate={{ 
            width: `${screenWidth-125}px`,
            left: showMenuObj.show ? '0px' : `${125/2}px`,
          }}
        >
          { mode === 'INDEX' && <Hero/> }
          { mode === 'PROJECTS' && <ProjectPage globalStyles={ styles }/> }
          { mode === 'ABOUT' && <AboutPage globalStyles={ styles }/> }
          { mode === 'RESUME' && <ResumePage globalStyles={  styles }/> }
          { mode === 'CONTACT' && <ContactPage globalStyles={  styles }/> }
        </motion.div>
        <Navigation
          key='site-navigation'
          styles={ styles } 
          transition={ transition }
          showMenuObj={ showMenuObj }
          setShowMenuObj = { setShowMenuObj }
        />
      </AnimatePresence>
    </main>
  );
};