import axios from "axios";

export function getProjects(setState, query){
  axios.get(`${process.env.NEXT_PUBLIC_API}/api/projects/`).then((res)=>{
    const data = [...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data, ...res.data];
    setState(data);
  })
}