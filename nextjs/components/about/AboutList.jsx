import { useRef, useState} from "react";
import { useCycle } from "framer-motion";
import AboutCard from "./AboutCard";
import AboutParagraph from "./AboutParagraph";
import MyStack from "./MyStack";


export default function AboutList({ styles, aboutMe }){
  const [animating, toggleAnimating] = useCycle(false)
  const [showCard, setShowCard]=useState(1)
  const scrollCount = useRef(0)
  const scrollLimiter = 1000;

  const parsedParagraphs = aboutMe.paragraphs.map((paragraph, i)=>(
    <AboutCard key={ `bio-paragraph-${i}` } 
      data={ paragraph }
      Component={ AboutParagraph }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  ))

  const parsedStack = (
    <AboutCard key={`bio-stack`}
      data={ aboutMe.stacks }
      order={parsedParagraphs.length + 2}
      Component={ MyStack }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  )

  const handleScroll = (e) => {
    if (!animating){
      scrollCount.current += e.deltaY;
      if (scrollCount.current >= scrollLimiter && showCard < (parsedParagraphs.length + 1)){
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
  
  return(
    <section 
      className={ [styles.aboutList, 'max-h-screen relative px-2 overflow-hidden'].join(' ') } 
      onWheel={ e=>{ handleScroll(e) }}
    >
      { parsedParagraphs && parsedParagraphs }
      { parsedStack }
    </section>
  )
}