import axios from "axios";

export async function getProfile(setState){
  axios.get(`${process.env.NEXT_PUBLIC_API}/profile/`).then((res)=>{
    setState(res.data);
  })
}