import BackGround from '@/components/Background';
import globalStyles from '@/styles/Global.module.scss';

export const metadata = {
  title: 'Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Resume() {

  return (
    <>
    <BackGround styles={ globalStyles }/>
    </>
  )
}
