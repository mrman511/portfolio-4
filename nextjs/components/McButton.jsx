import { motion } from "framer-motion";

export default function McButton({styles, show}){

  return(
    <div className={[styles.mcBtn, "relative w-[35px] h-[30px] m-2"].join(' ')}>
      <motion.div className="absolute w-full h-[4px] rounded-md"
        initial={{ translateY: '-50%'  }}
        animate={{
          top: show ? '15px' : '0px',
          rotate: show ? '45deg' : '0deg'
        }}
      ></motion.div>
      <motion.div className="absolute w-5/6 h-[3px] self-end rounded-md"
        initial={{ translateY: '-50%' }}
        animate={{
          alignSelf: show ? 'end' : 'center',
          top: '15px',
          width: show ? '0%' : '83%' 
        }}
      ></motion.div>
      <motion.div className="absolute w-full h-[4px] rounded-md"
        initial={{ translateY: '-50%' }}
        animate={{
          top: show ? '15px' : '30px',
          rotateZ: show ? '-45deg' : '0deg'
        }}
      ></motion.div>
    </div>
  );
}