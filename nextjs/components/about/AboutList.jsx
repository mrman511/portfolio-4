import { useRef, useState} from "react";
import { useCycle } from "framer-motion";
import AboutCard from "./AboutCard";
import AboutParagraph from "./AboutParagraph";
import MyStack from "./MyStack";


export default function AboutList({ styles, aboutMe }){
  const [animating, toggleAnimating] = useCycle(false, true);
  const [showCard, setShowCard]=useState(1);
  const [dragActive, toggleDragActive] = useCycle(false, true);
  const scrollCount = useRef(0);
  const scrollLimiter = 1000;

  const parsedParagraphs = aboutMe.paragraphs.map((paragraph, i)=>(
    <AboutCard key={ `bio-paragraph-${i}` } 
      data={ paragraph }
      Component={ AboutParagraph }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  ));

  const parsedStack = (
    <AboutCard key={`bio-stack`}
      styles={ styles }
      data={ aboutMe.stacks }
      order={(parsedParagraphs.length + 2)}
      Component={ MyStack }
      showCard={ showCard }
      toggleAnimating={ toggleAnimating }
    />
  );

  const handleScroll = (e) => {
    if (!animating){
      scrollCount.current += e.deltaY;
      if (scrollCount.current >= scrollLimiter){
        scrollCount.current = 0;
        if (showCard < (parsedParagraphs.length)){
          toggleAnimating();
          const newCard = showCard + 1;
          setShowCard(newCard);
        } else if ( showCard === parsedParagraphs.length ){
          toggleAnimating();
          const newCard = showCard + 2;
          setShowCard(newCard);
        }
      } else if (scrollCount.current <= (scrollLimiter * -1)){
        scrollCount.current = 0;
        if (showCard === (parsedParagraphs.length + 2)){
          toggleAnimating()
          setShowCard(parsedParagraphs.length)
        } else if (showCard > 1){
          toggleAnimating();
          const newCard = showCard - 1;
          setShowCard(newCard)
        }
      }
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault(e);
    if (!dragActive) toggleDragActive();
  }
  const handleDragEnd = (e) => {
    e.preventDefault(e);
    if (dragActive) toggleDragActive()
  }

  const handleDrag = (e) => {
    e.preventDefault();
    if (!mouseDown || !dragActive) return;
    console.log(e);
  }
  
  
  return(
    <section 
      className={ [styles.aboutList, 'relative max-h-screen h-screen overflow-y-hidden'].join(' ') } 
      onWheel={ e=>{ handleScroll(e) }}
      onMouseDown={ handleDragStart }
      onMouseUp={ handleDragEnd }
      onMouseMove={ handleDrag }
    >
      { parsedParagraphs }
      { parsedStack }
    </section>
  );
};