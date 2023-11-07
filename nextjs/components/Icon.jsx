import Image from "next/image";

export default function Icon({icon, alt}){
  return <Image 
    src={icon}
    alt={alt}
    fill
    style={{ objectFit: 'contain' }}
    sizes='10px'
  />
}