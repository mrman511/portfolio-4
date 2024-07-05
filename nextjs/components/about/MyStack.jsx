import StackCard from "./StackCard";
import { useState, useRef, useEffect } from "react";
import styles from '@/styles/About.module.scss';

export default function MyStack({ data }){
  const [currentCard, setCurrentCard] = useState(0)
  const scrollCount = useRef(0);

  
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
    <section className={"relative w-full h-[550px] flex flex-wrap justify-evenly text-offwhite items-center"}>
      { parsedStackCards }
    </section>
  );
}