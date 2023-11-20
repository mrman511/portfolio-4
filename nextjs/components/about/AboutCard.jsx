import { motion } from "framer-motion";


export default function AboutCard({styles, data, Component, showCard, toggleAnimating, order}){
  const i = order ? order : data.order

  const initial = {   
    translateY: '-100%',
    top: '100%',
    opacity: 0,
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
      return '15%'
    } else if (i < showCard){
      return '0%'
    } else if ((i - 1) === showCard) {
      return '85%'
    } else if (i < showCard){
      return '100%'
    }
  }

  const animateOpacity = () => {
    if (i === showCard ){
      return 1
    } else if ((i + 1) === showCard || (i - 1) === showCard) {
      return .3
    } else if (i < showCard || i < showCard){
      return 0
    } 
  }

  const animate = {
    translateY: animateTranslate(),
    top: animateTop(), 
    opacity: animateOpacity(),
  }

  return(
    <motion.article className="absolute px-2 flex flex-col justify-center"
    initial={ initial }
    animate={ animate }
    onAnimationComplete={ ()=>{ setTimeout(()=>{ toggleAnimating() }, 500) } }
    >
      <Component styles={ styles } data={ data } />
    </motion.article>
  )
}