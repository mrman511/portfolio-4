import axios from "axios";

export function sendEmail(formData, transition){
  axios.post(`${process.env.NEXT_PUBLIC_API}/contact`, formData)
}