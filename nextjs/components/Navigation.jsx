'use client'
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import navLinks from "@/utils/data/navLinks";
import McButton from "./McButton";


export default function Navigation({styles, transition}){
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const [isAnimating, setIsAnimating] = useState(false)
  const navHeight = useRef();

  const parsedNavLinks = navLinks.map(link=>(
    <div key={`nav-icon-${link.title}`} className={["relative w-6 h-6 me-4"].join(' ')}>
      <Link href={link.path}>
        <FontAwesomeIcon className={ [styles.icon, 'w-full h-full'].join(' ') } icon={link.icon}/>
      </Link>
    </div>
  ))

  const handleNavigation = (e) => {
    e.preventDefault();
    const str = e.target.href.split('/').pop();
    transition( str ? str : 'index');
  }
  
  
  const navSpeed = .2;
  const btnTransition = {
    duration: navSpeed,
    width: { delay: showMenuObj.show ? navSpeed : 0 },
    height: { delay: showMenuObj.show ? 0 : navSpeed },
    top: { delay: showMenuObj.show ? 0 : navSpeed },
    padding: { delay: showMenuObj.show ? navSpeed: 0 },
    transform: { delay: showMenuObj.show ? navSpeed: 0 },
  };
  
  useEffect(() => {
    const nav = document.getElementById('navLinks');
    if(nav){
      const height = nav.clientHeight;
      navHeight.current = height
    }
  }, [setShowMenuObj]);

  const handleClick = (e) => {
    if (!isAnimating){
      if (!showMenuObj.show){
        const obj = { show: true }
        if ((e.pageY < (navHeight.current + 20)) ){
          obj.click = navHeight.current + 20;
        } else {
          obj.click = e.pageY;
        } 
        setShowMenuObj(obj)
      }else{
        setShowMenuObj(prev => ({...prev, show: false}));
      }
      setIsAnimating(true)
    }
  };
  

  return(
    <AnimatePresence initial={ false }>
      <section className={[styles.navigation, "relative h-screen justify-self-stretch right-0 z-10"].join(' ')}>
        <motion.nav className='absolute w-[125px] h-screen right-0 z-10'
        key='navigation-open'
        // initial={false}
        animate={{
          translateX: showMenuObj.show ? '0%' : '100%' ,
          transition: { duration: navSpeed }
        }}
        >
          <motion.article onClick={(e)=>{ handleClick(e) }} className={[styles.navBtn, "absolute flex justify-center items-center"].join(' ')}
            key='navBtn-open'
            // initial={false}
            animate={{
              transform: showMenuObj.show ? 'translateX(0)': 'translateX(-100%)', 
              height: showMenuObj.show ? 'auto' : '100vh', 
              width: showMenuObj.show ? '100%' : 'auto',
              top: showMenuObj.show ? `${showMenuObj.click}px`: '0px',
              paddingRight: showMenuObj.show ? '25px': '0px',
            }}
            transition={btnTransition}
            onAnimationComplete={()=>setIsAnimating(false)}
          >
            <McButton styles={ styles } show={ showMenuObj.show }/>
          </motion.article>

          <motion.ul id='navLinks' className={[styles.navLinks, "relative h-auto pb-4 flex flex-col justify-evenly text-lg"].join(' ')}
            key='navLinksList-open'
            // initial={false}
            animate={{ translateY: '-100%', top: `${showMenuObj.click}px` }}
          >
            <li className="relative pe-12 py-3"><Link className='ps-4 pe-12 py-3' href='/' onClick={(e)=>{ handleNavigation(e) }}>Home</Link></li>
            <li className="relative pe-12 py-3"><Link className='ps-4 pe-12 py-3' href='/projects' onClick={(e)=>{ handleNavigation(e) }}>Projects</Link></li>
            <li className="relative pe-12 py-3"><Link className='ps-4 pe-12 py-3' href='/about' onClick={(e)=>{ handleNavigation(e) }}>About</Link></li>
            <li className="relative pe-12 py-3"><Link className='ps-4 pe-12 py-3' href='/resume' onClick={(e)=>{ handleNavigation(e) }}>Resume</Link></li>
            <li className="relative pe-12 py-3"><Link className='ps-4 pe-12 py-3' href='/contact' onClick={(e)=>{ handleNavigation(e) }}>Contact</Link></li>
            <li>
              <div className="w-full ps-4 flex items-center">
                { parsedNavLinks }
              </div>
            </li>

          </motion.ul>
        </motion.nav>
      </section>
    </AnimatePresence>
  );
}