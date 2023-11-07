import axios from "axios";

export function getProjects(setState, query){
  axios.get(`${process.env.NEXT_PUBLIC_API}/api/projects/`).then((res)=>{
    const data = res.data;
    setState(data);
  })
}

export async function getProjectImages(setState ,project){
  const mobile = await axios.get(`${process.env.NEXT_PUBLIC_API}/projects/images${project.mobile_image}`)
  const desktop = await axios.get(`${process.env.NEXT_PUBLIC_API}/projects/images${project.desktop_image}`)
  setState({ desktop: desktop.data, mobile: mobile.data });
}

export async function getProjectImage(setState, project){
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/projects/${project.id}/image/`)
  setState(res.data)
}