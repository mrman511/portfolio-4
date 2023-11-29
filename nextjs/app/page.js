import BackGround from '@/components/Background';
import globalStyles from '@/styles/Global.module.scss';
import Page from "@/components/Page";

export const metadata = {
  title: 'Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Home() {

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <Page styles={ globalStyles }/>
    </>
  )
}
