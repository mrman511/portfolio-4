'use client'
import Image from "next/image";
import defaultImage from '@/public/images/default.jpeg';
import { useState, useRef, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import { getProjectImages } from "@/utils/api/projects";

export default function ProjectCard({styles, project, i}){
  const [isFlipped, toggleIsFlipped] = useCycle(false, true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardImages, setCardImages] = useState()
  const [finishedInitialAnimation, toggleFinishedInitialAnimation] = useCycle(false, true);
  const cardRef = useRef(null);

  const handleFlip = () => {
    if (!isAnimating){
      toggleIsFlipped();
      setIsAnimating(true);
    }
  }

  useEffect(()=>{
    if (!cardImages){
      getProjectImages(setCardImages, project);
    }
    console.log(cardImages);
  })

  return (
    <>
      { cardImages &&<motion.section ref={cardRef} className={[styles.cardOuter, "relative w-full sm:w-4/5 md:w-5/12 lg:w-3/12 h-72 m-2 overflow-hidden"].join(' ')}
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
            <div className={[styles.front, "w-full h-full"]}>
              <Image 
                src={ 'data:image/png;base64,' + cardImages.mobile }
                fill
                alt={ project.title }
                style={{
                  objectFit: 'cover',
                  objectPosition: 'top',
                }}
                sizes='100px'
                />
            </div>
            <div className={[styles.back, "relative top-0 w-full h-full flex flex-col items-center justify-around overflow-hidden"].join(' ')}>
              <div className={[styles.background, "absolute w-[100vw] h-[100vh]"].join(' ')}
                initial={false}
                style={{
                  top: cardRef.current ? `-${cardRef.current.offsetTop}px` : 0,
                  left: cardRef.current ? `-${cardRef.current.offsetLeft}px` : 0,
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
                <div className="w-full flex flex-col items-center">
                  <h2>{ project.title }</h2>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      {!finishedInitialAnimation && <article className={[styles.back, "w-full h-full"]}>
        <div className={[styles.background, "absolute w-[100vw] h-[100vh]"].join(' ')}>
        </div>
      </article>}
    </motion.section>
      }
    </>
  )
}