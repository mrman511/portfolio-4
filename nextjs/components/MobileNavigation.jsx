'use client'
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navLinks from "@/utils/data/navLinks";


export default function MobileNavigation({styles}){
  const [showMenuObj, setShowMenuObj] = useState({show: false, click: 305});
  const [isAnimating, setIsAnimating] = useState(false)
  const navHeight = useRef();

  const parsedNavLinks = navLinks.map(link=>(
    <div key={`nav-icon-${link.title}`} className="relative w-6 h-6 me-4">
      <Link href={link.path}>
        <FontAwesomeIcon className={ [styles.icon, 'w-full h-full'].join(' ') } icon={link.icon}/>
      </Link>
    </div>
  ))
  
  
  const navSpeed = .2;
  
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
    <section className={[styles.navigation, "fixed w-screen block sm:hidden justify-self-stretch top-0 z-10"].join(' ')}>
      <motion.nav className='absolute h-[125px] w-full z-10'
      key='navigation-open'
      animate={{
        // translateY: showMenuObj.show ? '0%' : '100%' ,
        transition: { duration: navSpeed }
      }}
      >
        <article onClick={(e)=>{ handleClick(e) }} className={[styles.navBtn, "absolute w-16 h-16 right-0 m-4 rounded-lg flex justify-center items-center"].join(' ')}
          key='navBtn-open'>
          <motion.div className={[styles.mcBtn, "relative w-[35px] h-[30px] m-2 z-10"].join(' ')}>
            <motion.div className="absolute w-full h-[4px] rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%'  }}
              animate={{
                top: showMenuObj.show ? '15px' : '0px',
                rotate: showMenuObj.show ? '45deg' : '0deg',
                transition: { 
                  rotate: {delay: showMenuObj.show ? .3 : 0 },
                  top: { delay: showMenuObj.show ? 0 : .3 }
                }
              }}
              onAnimationComplete={()=>setIsAnimating(false)}
            ></motion.div>
            <motion.div className="absolute w-5/6 h-[3px] self-end rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%',  }}
              animate={{
                alignSelf: showMenuObj.show ? 'end' : 'center',
                top: '15px',
                width: showMenuObj.show ? '0%' : '83%',
                transition: {
                  width: {
                    delay: .3,
                    duration: 0,
                  }
                }
              }}
            ></motion.div>
            <motion.div className="absolute w-full h-[4px] rounded-md -translate-y-1/2"
              initial={{ translateY: '-50%' }}
              animate={{
                top: showMenuObj.show ? '15px' : '30px',
                rotate: showMenuObj.show ? '-45deg' : '0deg',
                transition: { 
                  rotate: { delay: showMenuObj.show ? .3 : 0 },
                  top: { delay: showMenuObj.show ? 0 : .3 }
                }
              }}
            ></motion.div>
          </motion.div>
        </article>

        <motion.ul id='navLinks' className={[styles.navLinks, "absolute h-[350px] pt-24 flex flex-col justify-evenly text-lg rounded-es-lg"].join(' ')}
          key='navLinksList-open'
          initial={{ translateX: '-100%', left: '100%' }}
          animate={{
            left: '100%',
            translateX: showMenuObj.show ? '0%' : '-100%', 
          }}
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