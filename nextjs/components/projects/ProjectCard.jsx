'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useRef} from "react";
import { motion, useCycle } from "framer-motion";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

export default function ProjectCard({styles, project, i}){
  const [isFlipped, toggleIsFlipped] = useCycle(false, true);
  const [showStack, toggleShowStack] = useCycle(false, true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [finishedInitialAnimation, toggleFinishedInitialAnimation] = useCycle(false, true);
  const cardRef = useRef(null);

  const handleFlip = (e) => {
    if (!isAnimating){
      toggleIsFlipped();
      setIsAnimating(true);
    }
  }

  return (
    <motion.section ref={cardRef} className={[styles.cardOuter, "relative w-[260px] h-96 overflow-hidden"].join(' ')}
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
          <CardBack styles={styles} cardRef={cardRef} Image={Image} Link={Link} project={project} showStack={ showStack }/>
        </motion.div>
      </article>

      <motion.div className="absolute w-full flex justify-evenly z-20"
      animate={{
        top: isFlipped ? '85%' : '100%',
        opacity: isFlipped ? 1 : 0,
      }}
      transition={{ delay: isFlipped ? .5 : 0 }}
      >
        { project.live_link && <Link className='relative' href={ project.live_link }>
          <button className={[styles.btn, styles.cardInfo,  "px-3 py-2 rounded-lg"].join(' ')}>View Live</button>
        </Link> }
        <motion.button 
          onClick={ toggleShowStack } 
          className={[styles.btn, styles.cardInfo,  "px-3 py-2 rounded-lg"].join(' ')}
          // animate={{
          //   top: showStack ? '100%': '0%',  
          // }}
          // transition={{ delay: showStack ? 0 : .2 }}
        >{showStack ? 'Description' : 'View Stack'}</motion.button>

        {/* <motion.button 
          onClick={ toggleShowStack } 
          className={[styles.btn, styles.cardInfo,  "px-3 py-2 rounded-lg"].join(' ')}
          animate={{
            top: showStack ? '0%': '100%',  
          }}
          transition={{ delay: showStack ? .2 : 0 }}
        >Description</motion.button> */}
      </motion.div>
    </motion.section>
  )
}