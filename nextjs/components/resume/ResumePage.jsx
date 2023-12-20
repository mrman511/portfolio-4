import { useState, useEffect } from "react";
import { getProfile } from "@/utils/api/profile";
import Image from "next/image";
import Link from "next/link";

export default function ResumePage({ globalStyles }){
  const [profile, setProfile] = useState();
  useEffect(()=>{
    if (!profile){
      getProfile(setProfile);
    }
  }, [profile]);

  return (
    <section>
      { profile &&
        <div className='relative w-full h-screen px-2 object-contain' >
          <iframe 
            title='Paul Bodner resume.pdf'
            src={`${process.env.NEXT_PUBLIC_STATIC_ROUTE}${ profile.resume }`}
            className="w-full h-full"
            >
          </iframe>
        </div>
      }
    </section>
  );
}