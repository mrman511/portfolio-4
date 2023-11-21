import Image from "next/image";
import { motion } from "framer-motion";

function StackLine({styles, lineData }){
  return (
    <li className="m-2">{ lineData.name }</li>
  );
}

export default function StackCard({styles, data, i , currentCard}){
  let backgroundPosition
  if (i === 1){
    backgroundPosition = '55% 50%';
  } else if (i === 2){
    backgroundPosition = '33% 50%';
  }

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

  const parsedTechnologies = data.technologies.map((tech, j) => (
    <StackLine key={ `stack-${i}-tech-${j}` } styles={ styles } lineData={ tech }/>
  ))
  const parsedLanguages = data.languages.map((language, j) => (
    <StackLine key={ `stack-${i}-language-${j}` } styles={ styles } lineData={ language }/>
  ))
  const parsedFrameworks = data.frameworks.map((framework, j) => (
    <StackLine key={ `stack-${i}-framework-${j}` } styles={ styles } lineData={ framework }/>
  ))

  return (
    <motion.article className={ [styles.stackCard, 'absolute w-11/12 max-w-[400px] items-center justify-between rounded-xl overflow-hidden'].join(' ') }
      initial={ initial }
      animate={ getCardAnimation() }
      transition={{ duration: .5 }}
    >
      <div className="absolute w-full h-full z-0">
        <Image 
          src={'data:image/jpeg;base64,' + data.image}
          alt={ data.title }
          fill
          style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
          sizes="(max-width: 500px) 300px, 500px"
          priority='fa'
          placeholder='empty'
        />
      </div>

      <div className="relative w-full h-[500px] flex flex-col items-center justify-evenly">
        <div className={ [styles.stackInfo, "relative flex justify-center w-full m-2 p-2 text-lg font-semibold sm:text-2xl sm:font-bold text-center rounded-lg"].join(' ') } >
          <h2>{ data.title }</h2>
        </div>
        <div className={[styles.stackInfo, "relative z-10 text-center mx-2 p-2 rounded-lg"].join(' ')}>
          <p>{ data.description }</p>
        </div>
        <div className="relative w-full flex justify-evenly">
          <ul className={[styles.stackInfo, "flex flex-col items-center p-4 rounded-lg"].join(' ')}>
            { parsedLanguages }
          </ul>
          <ul className={[styles.stackInfo, "flex flex-col items-center p-4 rounded-lg"].join(' ')}>
            { parsedFrameworks }
          </ul>
        </div>
        <ul className={[styles.stackInfo, "relative w-full flex justify-evenly rounded-lg"].join(' ')}>
          { parsedTechnologies }
        </ul>
      </div>
    </motion.article>
  );
}