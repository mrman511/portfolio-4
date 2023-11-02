import BackGround from '@/components/Background';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import globalStyles from '@/styles/Global.module.scss';

export const metadata = {
  title: 'Paul Bodner Portfolio',
  description: 'Online Portfolio for Paul Bodner. A Software Delevoper based out of New Westminster, British Columbia',
}

export default function Home() {

  // function shallowRouter(e, route){
  //   e.preventDefault();
  //   const router = useRouter();
  //   router.push(
  //     { pathname: `/${route}` },
  //     undefined,
  //     { shallow: true }
  //   );
  // }

  return (
    <>
    <BackGround styles={ globalStyles }/>
    <main>
      <section className='w-full h-screen flex items-center'>
        <Hero />
        <Navigation styles={ globalStyles }/>
      </section>
    </main>
    </>
  )
}
