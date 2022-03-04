import Head from 'next/head'
import Profilelayout from '../Layouts/Profilelayout'

export default function Profile() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Profile</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
    
  )
}

Profile.getLayout = function getLayout(page) {
  return (
      <Profilelayout>{page}</Profilelayout>
  )
}