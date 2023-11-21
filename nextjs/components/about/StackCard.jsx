import Image from "next/image";
import { motion } from "framer-motion";

export default function StackCard({styles, data, i , currentCard}){
  
  const initial = (i === 0) ? {
    translateX: '-50%',
    left: '50%',
    scale: 1,
    opacity: 1,
    zIndex: 2,
  } : {
    translateX: '-100%',
    left: '100%',
    scale: .5,
    opacity: 0,
    zIndex: 0,
  }


  const getCardAnimation = () => {
    if (currentCard === i){
      return {
        translateX: '-50%',
        left: '50%',
        scale: 1,
        opacity: 1,
        zIndex: 2,
      }
    } else if (currentCard > i){
      return {
        translateX: '-100%',
        left: '-1%',
        scale: .5,
        opacity: 0,
        zIndex: 0,
      }
    } else if (currentCard < i){
      console.log('here');
      return {
        translateX: '100%',
        left: '0%',
        scale: .5,
        opacity: 0,
        zIndex: 0,
      }
    }

  }

  return (
    <motion.article className={ [styles.stackCard, 'absolute w-11/12 max-w-[400px] flex flex-col rounded-xl overflow-hidden'].join(' ') }
      initial={ initial }
      animate={ getCardAnimation() }
      transition={{ duration: .5 }}
    >
      <div className="relative w-full h-[500px]">
        <div className="absolute w-full h-full">
          <Image 
            src={'data:image/jpeg;base64,' + data.image}
            alt={ data.title }
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 500px) 300px, 500px"
            priority='fa'
            placeholder='empty'
          />
        </div>
        <div className={ [styles.title, "relative flex justify-center w-full mt-2 text-lg font-semibold sm:text-2xl sm:font-bold text-center"].join(' ') } >
          <h2>{ data.title }</h2>
        </div>
      </div>
    </motion.article>
  );
}