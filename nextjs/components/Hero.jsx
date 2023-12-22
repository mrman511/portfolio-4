export default function Hero({styles}){

  return(
    <article className="relative w-auto h-full flex flex-col justify-center ps-2 xs:ps-[5%] sm:ps-[10%]">
      <h1 className="text-4xl">Paul <span className="font-semibold">Bodner</span></h1>
      <h3 className='mt-2 text-xl xs:text-2xl' >Full Stack Developer</h3>
      <p className="text-xl xs:text-2xl">Based out of Vancouver, Canada</p>
      <p className="mt-4 text-sm xs:text-base">From Pixels to Databases: A Fullstack Journey.</p>
    </article>
  );
}