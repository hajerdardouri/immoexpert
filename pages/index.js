import Head from 'next/head'
import Homelayout from '../Layouts/Homelayout'
import styles from '../styles/Home.module.css'

export default function Home() {
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
