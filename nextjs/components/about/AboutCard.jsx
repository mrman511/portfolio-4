import { motion, useAnimation, useInView } from "framer-motion";


export default function AboutCard({styles, data, Component, showCard, i, toggleAnimating}){

  const initial = {   
    translateY: '-100%',
    top: '100%',
  }
  
  const animateTranslate = () => {
    if (i === showCard ){
      return '-50%'
    } else if (i < showCard){
      return '-100%'
    } else if (i > showCard){
      return '0%'
    }
  }

  const animateTop = () => {
    if (i === showCard ){
      return '50%'
    } else if ((i + 1) === showCard) {
      console.log(`oneAboveCard-${i}`)
      return '15%'
    } else if (i < showCard){
      return '0%'
    } else if ((i - 1) === showCard) {
      console.log(`oneBelowCard-${i}`)
      return '85%'
    } else if (i < showCard){
      return '100%'
    }
  }

  const animate = {
    translateY: animateTranslate(),
    top: animateTop(), 
  }

  return(
    <motion.article className="absolute w-full flex flex-col justify-center"
    initial={ initial }
    animate={ animate }
    onAnimationComplete={ ()=>{ setTimeout(()=>{ toggleAnimating() }, 500) } }
    >
      <Component data={ data } />
    </motion.article>
  )
}