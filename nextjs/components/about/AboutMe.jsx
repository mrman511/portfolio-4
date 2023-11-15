'use client'
import { useRef, useState } from "react";
import { useCycle } from "framer-motion";
import { bioParagraphs } from "@/utils/data/aboutMe";
import AboutCard from "./AboutCard";
import AboutParagraph from "./AboutParagraph";
import MyStack from "./MyStack";


export default function AboutMe({styles}){
  const [animating, toggleAnimating] = useCycle(false)
  const [showCard, setShowCard]=useState(7)
  const scrollCount = useRef(0)
  const scrollLimiter = 1000;


  const parsedBio = bioParagraphs.map((paragraph, i)=>(
      <AboutCard key={ `bio-paragraph-${i}` } 
      data={ paragraph }
      Component={ AboutParagraph }
      i={ i }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  ))

  const parsedStack = (
    <AboutCard key={`bio-stack`}
      data={ undefined }
      Component={ MyStack }
      i={7}
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  )

  const handleScroll = (e) => {
    if (!animating && animating){
      scrollCount.current += e.deltaY;
      if (scrollCount.current >= scrollLimiter && showCard < (parsedBio.length - 1)){
        toggleAnimating();
        scrollCount.current = 0;
        const newCard = showCard + 1;
        setShowCard(newCard);
      } else if (scrollCount.current <= (scrollLimiter * -1) && showCard > 0){
        toggleAnimating();
        scrollCount.current = 0;
        const newCard = showCard - 1;
        setShowCard(newCard)
      }
    }
  }


  return (
    <section 
      className={ [styles.aboutList, 'max-h-screen relative px-2 overflow-hidden'].join(' ') } 
      onWheel={ e=>{ handleScroll(e) }}
    >
      {/* { parsedBio } */}
      { parsedStack }
    </section>
  )
}