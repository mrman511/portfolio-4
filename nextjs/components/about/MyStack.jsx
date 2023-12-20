import StackCard from "./StackCard";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function MyStack({ styles, data }){
  const [currentCard, setCurrentCard] = useState(0)
  
  const clickNext = () => {
    const num = currentCard + 1;
    setCurrentCard(num);
  }
  const clickPrev = () => {
    const num = currentCard - 1;
    setCurrentCard(num);
  }
  
  const parsedStackCards = data.map((cardData, i) => (
    <StackCard 
      key={`stack-card-${i}`}
      styles={ styles }
      data={ cardData }
      currentCard={ currentCard }
      i={ i }
    />
  ))

  useEffect(()=>{
  })


  return (
    <section className={[styles.myStack, "flex w-full h-screen p-2 justify-center items-center"].join(' ')}>
      { parsedStackCards }
      
      { currentCard !== 0 && <button 
        className={[styles.stackBtn, "absolute p-2 flex justify-center items-center -translate-y-1/2 top-1/2 max-sm:top-[90%] -translate-x-1/2 max-sm:left-6 left-8 sm:left-16 rounded-full z-20"].join(' ')}
        onClick={ ()=>{ clickPrev() } }
      >
        <FontAwesomeIcon icon={ faArrowLeft } className={[styles.icon, 'relative h-8 w-8 sm:h-10 sm:w-10'].join(' ')} />
      </button> }
  
      { currentCard !== (data.length - 1) && <button 
        className={[styles.stackBtn, "absolute p-2 flex justify-center items-center -translate-y-1/2 top-1/2 max-sm:top-[90%] translate-x-1/2 max-sm:right-6 right-8 sm:right-16 rounded-full z-20"].join(' ')}
        onClick={ ()=>{ clickNext() } }
      >
        <FontAwesomeIcon icon={ faArrowRight } className={[styles.icon, 'relative h-8 w-8 sm:h-10 sm:w-10'].join(' ')} />
      </button>}

    </section>
  );
}