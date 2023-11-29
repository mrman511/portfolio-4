import axios from "axios";

export function getAboutMe(setState){
  axios.get(`${process.env.NEXT_PUBLIC_API}/about`).then((res)=> {
    setState(res.data)
  })
}