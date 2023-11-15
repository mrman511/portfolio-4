'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navLinks from "@/utils/data/navLinks";


export default function Navigation({styles}){
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const [isAnimating, setIsAnimating] = useState(false)
  const navHeight = useRef();

  const parsedNavLinks = navLinks.map(link=>(
    <div key={`nav-icon-${link.title}`} className={[styles.icon, "relative w-6 h-6 me-4"].join(' ')}>
      <Link href={link.path}>
        <FontAwesomeIcon className={ [styles.icon, 'w-full h-full'].join(' ') } icon={link.icon}/>
      </Link>
    </div>
  ))
  
  
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
    console.log('here');
    if (!isAnimating){
      if (!showMenuObj.show){
        const obj = { show: true }
        if ((e.pageY < (navHeight.current + 20)) ){
          obj.click = navHeight.current + 20;
          console.log(e);
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
    <section className={[styles.navigation, "fixed justify-self-stretch h-screen right-0 z-10"].join(' ')}>
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
          <motion.div className={[styles.mcBtn, "relative w-[35px] h-[30px] m-2"].join(' ')}>
            <motion.div className="absolute w-full h-[4px] rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%'  }}
              animate={{
                top: showMenuObj.show ? '15px' : '0px',
                rotate: showMenuObj.show ? '45deg' : '0deg'
              }}
            ></motion.div>
            <motion.div className="absolute w-5/6 h-[3px] self-end rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%' }}
              animate={{
                alignSelf: showMenuObj.show ? 'end' : 'center',
                top: '15px',
                width: showMenuObj.show ? '0%' : '83%' 
              }}
            ></motion.div>
            <motion.div className="absolute w-full h-[4px] rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%' }}
              animate={{
                top: showMenuObj.show ? '15px' : '30px',
                rotateZ: showMenuObj.show ? '-45deg' : '0deg'
              }}
            ></motion.div>
          </motion.div>
        </motion.article>

        <motion.ul id='navLinks' className={[styles.navLinks, "absolute h-[250px] flex flex-col justify-evenly text-lg"].join(' ')}
          key='navLinksList-open'
          // initial={false}
          animate={{ translateY: '-100%', top: `${showMenuObj.click}px` }}
        >
          <li><Link className="relative ps-4 pe-12 py-6" href='/projects'>Projects</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href='/about'>About</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href=''>Resume</Link></li>
          <li><Link className="relative ps-4 pe-12 py-6" href=''>Contact</Link></li>
          <li>
            <div className="w-full ps-4 flex items-center">
              { parsedNavLinks }
            </div>
          </li>

        </motion.ul>
      </motion.nav>
    </section>
  );
}