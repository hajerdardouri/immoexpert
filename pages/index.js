import Head from 'next/head'
import Homelayout from '../Layouts/Homelayout'
import { useRouter } from 'next/router'
export default function Home() {
  let router = useRouter()
  let greeting = router.locale == 'en-us ? '
  return (
    <div>
      <Head>
        <title>ImmoExpert | Home</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
    
  )
}

Home.getLayout = function getLayout(page) {
  return (
      <Homelayout>{page}</Homelayout>
  )
}
