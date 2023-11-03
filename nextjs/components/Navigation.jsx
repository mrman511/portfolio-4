'use client'
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({styles}){
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const navHeight = useRef();
  
  
  // function routeClick(e, routeName){
  //   e.preventDefault();
  //   const router = useRouter();
  //   router.push(
  //     {
  //       pathname: `/${routeName}`,
  //     }
  //   );
  // }

  const navSpeed = .2;
  const btnOpenTransition = {
    duration: navSpeed,
    width: { delay: navSpeed },
    padding: { delay: navSpeed },
    transform: { delay: navSpeed },
  };
  const btnClosedTransition = {
    duration: navSpeed,
    height: { delay: navSpeed },
    top: { delay: navSpeed },
  };
  
  useEffect(() => {
    const nav = document.getElementById('navLinks');
    if(nav){
      const height = nav.clientHeight;
      navHeight.current = height
    }
  }, [setShowMenuObj]);

  const handleClick = (e) => {
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
  };
  

  return(
    <section className={[styles.navigation, "fixed w-[125px] h-screen right-0 z-10"].join(' ')}>
      <AnimatePresence mode='wait' initial={false}>
      { showMenuObj.show && <motion.nav 
      key='navigation-open'
      initial={{left: 0, translateX: '100%'}}
      animate={{translateX: 0, transition: { duration: navSpeed }}}
      >
        <motion.article onClick={(e)=>{ handleClick(e) }} className={[styles.navBtn, "absolute flex justify-center items-center"].join(' ')}
          key='navBtn-open'
          initial={{ 
            transform: 'translateX(-100%)',
            height: '100vh',
            width: '2.5rem',
            top: 0,
            padding: 0, 
          }}
          animate={{
            transform: 'translateX(0)', 
            height: '35px', 
            width: '100%',
            top: showMenuObj.click,
            padding: '0 2em 0 0',
            transition: btnOpenTransition
          }}
        >
          <motion.div className={[styles.mcBtn, "w-[30px] h-[25px] flex flex-col justify-between items-center"].join(' ')}
            key='mcBtn'
          >
            <div className="w-full h-[3px]"></div>
            <div className="w-full h-[3px]"></div>
            <div className="w-full h-[3px]"></div>
          </motion.div>
        </motion.article>

        <motion.ul id='navLinks' className={[styles.navLinks, "relative h-[250px] flex flex-col justify-evenly text-lg"].join(' ')}
          key='navLinksList-open'
          initial={{ translateY: '-100%', top: showMenuObj.click }}
        >
          <li><Link className="relative ps-4 pe-12 py-6" href='/projects'>Projects</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href=''>Contact</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href=''>Resume</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href=''>Contact</Link></li>
        </motion.ul>
      </motion.nav>
      }

      { !showMenuObj.show && <motion.nav 
        key='nav-closed'
        initial={{translateX: 0}}
        animate={{ translateX: '100%'}}
      >
         <motion.article onClick={(e)=>{ handleClick(e) }} className={[styles.navBtn, "absolute flex justify-center items-center"].join(' ')}
          key='navBtn-closed'
          initial={{
            transform: 'translateX(0)', 
            height: '35px', 
            width: '100%',
            top: showMenuObj.click,
            padding: '0 2em 0 0',
          }}
          animate={{
            transform: 'translateX(-100%)',
            height: '100vh',
            width: '2.5rem',
            top: 0,
            padding: 0, 
            transition: btnClosedTransition,
          }}
        >
          <div className={[styles.mcBtn, "w-[30px] h-[25px] flex flex-col justify-between items-center"].join(' ')}>
            <div className="w-full h-[3px]"></div>
            <div className="w-full h-[3px]"></div>
            <div className="w-full h-[3px]"></div>
          </div>
        </motion.article>

        <motion.ul id='navLinks' className={[styles.navLinks, "relative h-[250px] flex flex-col justify-evenly text-lg"].join(' ')}
          key='navLinksList-close'
          initial={{ translateY: '-100%', top: showMenuObj.click }}
        >
        <li ><Link className="relative ps-4 pe-12 py-6 " href=''>Projects</Link></li>
          <li ><Link className="relative ps-4 pe-12 py-6 " href=''>Contact</Link></li>
          <li ><Link className="relative ps-4 pe-12 py-6 " href=''>Resume</Link></li>
          <li ><Link className="relative ps-4 pe-12 py-6 " href=''>Contact</Link></li>
        </motion.ul> 
      </motion.nav>}

      </AnimatePresence> 
    </section>
  );
}