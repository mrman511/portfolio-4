'use client'
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import Navigation from "./Navigation";
import Hero from '@/components/Hero';
import ProjectPage from "./projects/ProjectPage";
import AboutPage from "./about/AboutPage";
import ResumePage from "./resume/ResumePage";
import ContactPage from "./Contact/ContactPage";

import useVisualMode from "@/utils/helpers/useVisualMode";

export default function Page({styles}){
  const [screenWidth, setScreenWidth] = useState(320);
  const [showMenuObj, setShowMenuObj] = useState({ show: false, click: 305 });
  const [mode, transition] = useVisualMode('index');
  const page = useRef();

  const getPageWidth = () => {
    const animationObj = {}
    if (screenWidth > 1000){
      animationObj.width = `${(screenWidth-125)-125/2}px`;
      animationObj.left = `${125/2}px`;
    } else if (screenWidth > 420){
      animationObj.width = `${screenWidth-125}px`;
      animationObj.left = showMenuObj.show ? '0px' : `${125/2}px`;
    } else {
      animationObj.width = `${screenWidth-55}px`;
      animationObj.left = showMenuObj.show ? `-${125-55}px` : `2px`;
    }
    return animationObj
  }

  
  useEffect(() => {
    function getCurrentWidth(){
      return page.current.offsetWidth
    }
    const updateWidth = () => {
      setScreenWidth(getCurrentWidth())
    }
    if (window.innerWidth !== screenWidth){
      updateWidth();
    }
    window.addEventListener('resize', updateWidth);
    return(() => {
      window.removeEventListener('resize', updateWidth);
    })
  })

  return(
    <main ref={ page } className={ [styles.page, 'w-full h-screen max-h-screen flex overflow-hidden'].join(' ') }>
      <div key='background-overlay' className="absolute w-full h-full opacity-70">
        <Image
          src={ process.env.NEXT_PUBLIC_STATIC_ROUTE + '/images/backgrounds/marbel-overlay.png' }
          alt=''
          fill
          style={{ objectFit: 'cover' }}
          sizes='5000px'
        />
      </div>
      <AnimatePresence initial={ false }>
        <motion.div className="relative h-screen"
          key='main-page'
          initial={ getPageWidth() }
          animate={ getPageWidth() }
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