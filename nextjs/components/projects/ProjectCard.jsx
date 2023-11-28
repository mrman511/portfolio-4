'use client'
import Image from "next/image";
import Link from "next/link";
import defaultImage from '@/public/images/default.jpeg';
import { useState, useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function ProjectCard({styles, project, i}){
  const [isFlipped, toggleIsFlipped] = useCycle(false, true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [finishedInitialAnimation, toggleFinishedInitialAnimation] = useCycle(false, true);
  const cardRef = useRef(null);

  const handleFlip = () => {
    if (!isAnimating){
      toggleIsFlipped();
      setIsAnimating(true);
    }
  }

  return (
    <motion.section ref={cardRef} className={[styles.cardOuter, "relative w-[98%] sm:w-11/12 md:w-[49%] xl:w-[32%] h-80 overflow-hidden"].join(' ')}
      initial={{ 
        rotateX: 90,
        originY: '0%' 
      }}
      animate={{ 
        rotateX: 0,
      }}
      transition={{
        ease: 'easeOut',    
        duration: 0.2, 
        animationDirection: 'normal', 
        delay: ((Math.sin(i*29)/3) +.2) 
      }}
      onAnimationComplete={()=> toggleFinishedInitialAnimation() }
    >

      <article onClick={(e)=>{handleFlip(e)}} className={[styles.projectCard, styles.front, "w-full h-full"].join(' ')}>
        <motion.div className={[styles.inner, "relative w-full h-full bottom-0"].join(' ')}
          initial={false}
          animate={{ rotateY: isFlipped? 180 : 0 }}
          transition={{ 
            ease: 'easeOut',
            duration: 0.2, 
            animationDirection: 'normal' 
          }}
          onAnimationComplete={()=> setIsAnimating(false) }
        >
          <CardFront styles={styles} Image={Image} project={project}/>
          <CardBack styles={styles} cardRef={cardRef} Image={Image} Link={Link} project={project}/>
        </motion.div>
      </article>
      {/* {!finishedInitialAnimation && <article className={[styles.back, "w-full h-full"]}>
        <div className={[styles.background, "absolute w-[100vw] h-[100vh]"].join(' ')}>
        </div>
      </article>} */}
    </motion.section>
  )
}