'use client'

import { useState, useEffect, useRef } from "react"
import { motion, useCycle } from "framer-motion"
import Image from "next/image"
import toTitleCase from "@/utils/helpers/toTitleCase"

function StackItem({ data, showStackNameObj, handleShowStackName }){

  return (
    <div className="w-auto flex items-center overflow-hidden" onMouseEnter={ () => { handleShowStackName(data.name) } } >
      <div className="relative my-1 me-2 w-8 h-8">
        {data.image ? 
        <Image 
          src={process.env.NEXT_PUBLIC_STATIC_ROUTE + data.image}
          alt={ data.name }
          fill
          objectFit="cover"
          sizes='16px'
        /> 
        : 
        <p>{ data.name }</p>}
      </div>
      { (data.image && showStackNameObj ) &&
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: showStackNameObj[data.name] ? 'auto' : 0 }}
        >
          <p className="whitespace-nowrap">{ data.name }</p>
        </motion.div>
      }
    </div>
  )
}


function Stack({data, keys, title }){
  const [showStackNameObj, setShowStackNameObj] = useState();
  const openStackItem=useRef();

  function handleShowStackName(key){
    const currentStackItem = openStackItem.current;
    openStackItem.current = key;
    
    setShowStackNameObj(prev =>{
      prev[key]  =true
      if (currentStackItem) prev[currentStackItem] = false
      return { ...prev }
    })
  }

  
  const parsedStack=keys.map((key, i)=>{
    const stackSections = data[key].map((stackItem, j)=>{
      return (
        <StackItem 
          key={`${key}-${stackItem.id}-${i}`}
          data={ stackItem }
          showStackNameObj={ showStackNameObj }
          handleShowStackName={ handleShowStackName }
        />
      );
    });

    return (
      <div key={`${title}-${key}-stack`}>
        <h4>{ toTitleCase(key) }</h4>
        <div className="flex items-center">
          { stackSections }
        </div>
      </div>
    );
  });
 
  useEffect(()=>{
    if (!showStackNameObj){
      const obj = {};
      keys.forEach((key)=>{
        data[key].forEach((item) => obj[item.name]=false);
      });
      setShowStackNameObj(obj)
    }
  }, [showStackNameObj]);

  return (
    <div className="relative w-full min-h-min">
      { parsedStack }
    </div>
  )
}

export default function ProjectCardDescription({project, showMenu}){
  const [showText, toggleShowText] = useCycle(true, false);

  return(
    <div className="relative w-full flex flex-col">
      <div className="w-full h-8 px-2 flex flex-row-reverse">
        <button 
          className="px-1 shadow rounded hover:pointer-cursor border border-offblack"
          onClick={ toggleShowText }
        >
            { showText ? 'Stack' : 'Description' }
          </button>
      </div>

      <motion.div className='absolute w-full h-full top-8 overflow-scroll z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: showText ? 0 : 1 }}
        transition={{ duration: .5, delay: showText ? 0 : .5 }}
      >
        <Stack key={`${project.title}-tech-stack`} data={ project } keys={ ['languages', 'frameworks'] } title={ project.title } />
      </motion.div>

      <motion.div className='relative w-full p-2'
        initial={{ opacity: 1 }}
        animate={{ opacity: showText ? 1 : 0}}
        transition={{ duration: .5, delay: showText ? .5 : 0 }}
      >
        <p>{ project.description }</p>
      </motion.div>
    </div>
  )
}