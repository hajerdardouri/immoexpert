import Head from 'next/head'
import Addpostlayout from '../Layouts/Addpostlayout'


export default function Addpost() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Addpost</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
    
  )
}

Addpost.getLayout = function getLayout(page) {
  return (
      <Addpostlayout>{page}</Addpostlayout>
  )
}