'use client'
import { useEffect, useRef, useState } from "react";
import ParticleRipple from "./particle-ripple/ParticleRipple";
 
export default function BackGround({ styles }){
  const background = useRef(null)
  const darkParticles = [100,100,100];
  const lightParticles = [249, 220, 34];
  const [particleColour, setParticleColour] = useState();

  function toggleDarkMode(toDarkMode){
    if (toDarkMode){
      setParticleColour(prev=>lightParticles)
    } else {
      setParticleColour(prev=>darkParticles)
    }
  }

  useEffect(()=>{
    if (!particleColour){
      const mode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      toggleDarkMode(mode)
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => toggleDarkMode(e.matches));
  }, [particleColour])


  return(
    <div ref={background} className={[styles.background, styles.mouseMoveGradientTracking,'fixed w-screen h-screen max-h-screen'].join(' ')}>
        { particleColour && < ParticleRipple
          colSpacing={ 10 }
          rowSpacing={ null }
          particleColor={ [...particleColour, .5] }
          particleColorFade={ null }
          rippleSpeed={ 50 }
          particleSpeed={ 20 }
          particleSpeedFunction={ null }
          particleRadiusMax={ 1.25 }
          particleRadiusFunction={ null }
          maxRadius={ 200 }
          maxRadiusFunction={ null }
          includeStatic={ true }
          staticParticleMaxRadius={ .5 }
          staticParticleColor={ [...particleColour, .3] }
        />}
      </div>
  );
}