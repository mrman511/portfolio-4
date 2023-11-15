'use client'
import { useRef, useState } from "react";
import { useCycle } from "framer-motion";
import { bioParagraphs } from "@/utils/data/aboutMe";
import AboutCard from "./AboutCard";


export default function AboutMe({styles}){
  const [animating, toggleAnimating] = useCycle(false)
  const [showCard, setShowCard]=useState(0)
  const scrollCount = useRef(0)
  const scrollLimiter = 150;


  const parsedBio = bioParagraphs.map((paragraph, i)=>(
      <AboutCard key={ `bio-paragraph-${i}` } 
      paragraph={ paragraph } 
      i={ i }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  ))

  const handleScroll = (e) => {
    if (!animating){
      scrollCount.current += e.deltaY;
      if (scrollCount.current >= scrollLimiter && showCard < (parsedBio.length - 1)){
        scrollCount.current = 0;
        const newCard = showCard + 1;
        toggleAnimating();
        setShowCard(newCard);
      } else if (scrollCount.current <= (scrollLimiter * -1) && showCard > 0){
        scrollCount.current = 0;
        const newCard = showCard - 1;
        toggleAnimating();
        setShowCard(newCard)
      }
    }
  }


  return (
    <section 
      className={ [styles.aboutList, 'max-h-screen relative px-2 overflow-hidden'].join(' ') } 
      onWheel={ e=>{ handleScroll(e) }}
    >
      { parsedBio }
    </section>
  )
}