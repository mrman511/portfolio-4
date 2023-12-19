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

      <article onClick={(e)=>{handleFlip(e)}} className={[styles.projectCard, styles.front, "w-full h-full hover:cursor-pointer"].join(' ')}>
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
        >{showStack ? 'Description' : 'View Stack'}</motion.button>
      </motion.div>

      <motion.div className="absolute w-11/12 py-4 flex justify-evenly z-20 bg-offblack text-offwhite bg-opacity-70 rounded-md"
      initial={{ top: '100%', translateX: '-50%', left: '50%'  }}
      animate={{
        top: isFlipped ? '100%' : '75%',
        opacity: isFlipped ? 0 : 1,
      }}
      transition={{ delay: isFlipped ? 0 : .5 }}
      >
        <h2 className="text-xl text-center">{ project.title }</h2>
      </motion.div>
        
    </motion.section>
  )
}