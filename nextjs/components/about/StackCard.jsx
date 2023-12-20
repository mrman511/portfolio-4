import Image from "next/image";
import { motion } from "framer-motion";
import { getInitial, getCardAnimation } from '@/utils/animation/stackCards.js';

import StackCardList from "../StackCardList";

// function StackLine({styles, lineData }){
//   return (
//     <li className="m-2 flex items-center">
//       {lineData.image && <div className="relative w-8 h-8">
//         <Image 
//           src={ process.env.NEXT_PUBLIC_STATIC_ROUTE + lineData.image }
//           alt={ lineData.name }
//           fill
//           style={{ objectFit: 'cover' }}
//         />  
//       </div>}
//       { lineData.name }
//     </li>
//   );
// }

export default function StackCard({styles, data, i , currentCard}){
  let backgroundPosition
  if (i === 1){
    backgroundPosition = '55% 50%';
  } else if (i === 2){
    backgroundPosition = '33% 50%';
  }

  const parsedLanguages = <StackCardList 
    key={ `stackcard-languages` } 
    styles={ styles } 
    dataArr={ data.languages }
    isCol={ true }
    title='Languages'
    shading={ true }
  />

  const parsedFrameworks = <StackCardList 
    key={ `stackcard-frameworks` } 
    styles={ styles } 
    dataArr={ data.frameworks }
    isCol={ true }
    title='Frameworks'
    shading={ true }
    />


  const parsedTechnologies = <StackCardList 
    key={ `stackcard-technologies` } 
    styles={ styles } 
    dataArr={ data.technologies }
    title='Technologies'
    shading={ true }
  />

  return (
    <motion.article className={ [styles.stackCard, 'absolute w-full max-xs:h-[700px] max-w-[400px] h-[500px] items-center justify-between rounded-xl overflow-hidden'].join(' ') }
      initial={ getInitial(i) }
      animate={ getCardAnimation(currentCard, i) }
      transition={{ duration: .5 }}
    >
      <div className="absolute w-full h-full z-0">
        <Image 
          src={process.env.NEXT_PUBLIC_STATIC_ROUTE + data.image}
          alt={ data.title }
          fill
          style={{ objectFit: 'cover', objectPosition: backgroundPosition }}
          sizes="(max-width: 500px) 300px, 500px"
          priority='fa'
          placeholder='empty'
        />
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-evenly">
        <div className={ [styles.stackInfo, "relative flex justify-center w-full m-2 p-2 text-lg sm:text-2xl font-semibold sm:font-bold text-center rounded-lg"].join(' ') } >
          <h2>{ data.title }</h2>
        </div>
        <div className={[styles.stackInfo, "relative z-10 text-center mx-2 p-2 max-xs:text-sm rounded-lg"].join(' ')}>
          <p>{ data.description }</p>
        </div>

        <div className="relative w-full flex justify-evenly">
          <article className="relative w-full h-full flex flex-col justify-center items-center pb-12">
            <div className={["relative max-xs:w-4/6 w-full flex max-xs:flex-col justify-evenly items-stretch overflow-scroll mb-4"].join(' ')}>
              { parsedLanguages }
              { parsedFrameworks }
            </div>
            { parsedTechnologies }
          </article>
        </div>
      </div>
    </motion.article>
  );
}