'use client'
import Image from "next/image";
import defaultImage from '@/public/images/default.jpeg';
import { useState, useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

export default function ProjectCard({styles, project}){
  const [isFlipped, toggleIsFlipped] = useCycle(false, true);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef(null);

  const handleFlip = () => {
    console.log(cardRef.current.offsetLeft);
    console.log(cardRef.current.offsetRight);
    if (!isAnimating){
      toggleIsFlipped();
      setIsAnimating(true);
    }
  }

  useRef(()=>{
    
  })

  return (
    <motion.article ref={cardRef} onClick={(e)=>{handleFlip(e)}} className={[styles.projectCard, "relative w-52 h-72"].join(' ')}
      // initial={ false }
      // animate={{ paddingBottom: isFlipped ? '2em': 0 }}
    >
      <div className="absolute w-full bottom-0 flex flex-col items-center">
        <h2>{ project.title }</h2>
      </div>

      <motion.div className={[styles.inner, "relative w-full h-full bottom-0"].join(' ')}
        initial={false}
        animate={{ rotateY: isFlipped? 180 : 360 }}
        transition={{ duration: 0.3, animationDirection: 'normal' }}
        onAnimationComplete={()=> setIsAnimating(false) }
      >

        <div className={[styles.front, "w-full h-full"]}>
          <Image 
            src={defaultImage}
            fill
            alt={ project.title }
            style={{
              objectFit: 'cover',
              objectPosition: 'top',
            }}
            sizes='100px'
            />
        </div>

        <div className={[styles.back, "relative top-0 w-full h-full overflow-hidden"].join(' ')}>
          <div className={[styles.background, "absolute w-[100vw] h-[100vh]"].join(' ')}
            initial={false}
            style={{
              top: isFlipped ? `-${cardRef.current.offsetTop}px` : 0,
              left: isFlipped ? `-${cardRef.current.offsetLeft}px` : 0,
            }}
          >
          </div>
          <p>{project.description}</p>
          <div>
            <h4>Stack</h4>
            <ul>
              <li> Python
                <ul>
                  <li>Django</li>
                  <li>Django-Rest-Framework</li>
                </ul>
              </li>
              <li>JavaScript
                <ul>
                  <li>Next.js</li>
                  <li>Framer Motion</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

      </motion.div>
    </motion.article>
  )
}