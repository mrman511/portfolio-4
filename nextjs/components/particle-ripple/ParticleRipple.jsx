import { useState, useRef, useEffect } from 'react';
import ParticleGrid from './particleGrid';

export default function ParticleRipple(props){
  const {
    colSpacing,
    rowSpacing,
    particleColor,
    particleColorFade,
    rippleSpeed,
    particleSpeed,
    particleSpeedFunction,
    particleRadiusMax, 
    particleRadiusFunction, 
    maxRadius, 
    maxRadiusFunction,
    includeStatic,
    staticParticleMaxRadius,
    staticParticleColor
  } = props;
  
  const canvasRef = useRef(null);
  const staticRef = useRef(null)
  const particleGrid = useRef();
  const staticGrid = useRef()
  const [animationFrame, setAnimationFrame] = useState(0);
  const [activeParticles, setActiveParticles] = useState([]);
  
  function drawParticles(ctx, grid) {
    for (let particle of grid.activeParticles){
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = particle.colour;
      ctx.fill();
    }
  }
  
  function handleClick(e){
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    particleGrid.current.startRipple(x,y,maxRadius);
    setActiveParticles((prev)=>[ ...particleGrid.current.activeParticles ]);
    setAnimationFrame(animationFrame+1);
  }
  
  useEffect(()=>{
    let animationFrameId;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!canvas.eventListener){
      window.addEventListener('click', handleClick);
      canvas.eventListener= true;
    }
    
    canvas.width = context.canvas.clientWidth;
    canvas.height = context.canvas.clientHeight;
    canvas.cols = Math.floor(canvas.width/colSpacing);
    canvas.rows = Math.floor((rowSpacing ? canvas.height/rowSpacing : canvas.height/colSpacing));
    
    if (!particleGrid.current){
      particleGrid.current = new ParticleGrid(canvas.height, canvas.width, canvas.cols, canvas.rows, 1, true);
      particleGrid.current.fillGrid(particleRadiusMax, particleColor, particleSpeed);
    }
    // set up static grid
    if (includeStatic && !staticGrid.current){
      const ref = staticRef.current;
      const staticContext = ref.getContext('2d');
      ref.width = staticContext.canvas.clientWidth;
      ref.height = staticContext.canvas.clientHeight;
      canvas.cols = Math.floor(canvas.width/colSpacing);
      canvas.rows = Math.floor((rowSpacing ? ref.height/rowSpacing : ref.height/colSpacing));

      staticGrid.current = new ParticleGrid(ref.height, ref.width, canvas.cols, canvas.rows, 1);
      staticGrid.current.fillGrid(staticParticleMaxRadius ? staticParticleMaxRadius: 1, staticParticleColor);
      drawParticles(staticContext, staticGrid.current)
    }
    
    // let animationFrameId;

    function render(){
      drawParticles(context, particleGrid.current);
      particleGrid.current.continueRipple(1)
      animationFrameId = requestAnimationFrame(render);
      setActiveParticles(particleGrid.current.activeParticles);
    }
    if (animationFrame && !activeParticles){
      setAnimationFrame(0);
    }
    if (animationFrame!==1){
      if (particleGrid.current.activeParticles.length>0  ){
        particleGrid.current.continueRipple(1);
        render();
      } 
    } else  {
      render();
    }
    if (animationFrameId){
      cancelAnimationFrame(animationFrameId);
    }
    if (activeParticles.length>0){
      setTimeout(()=>{
        setAnimationFrame(animationFrame+1);
      }, rippleSpeed)
    }
  }, [animationFrame])


  return (
    <>
      <canvas ref={ canvasRef } className='absolute w-[110%] h-[110%] -top-8 -left-8'></canvas>
      <canvas ref={ staticRef } className='absolute w-[110%] h-[110%] -top-8 -left-8'></canvas>
    </>
  );
}