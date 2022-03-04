import Head from 'next/head'
import Wishlistlayout from '../Layouts/wishlistlayout'

export default function Wishlist() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Wishlist</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
    
  )
}

Wishlist.getLayout = function getLayout(page) {
  return (
      <Wishlistlayout>{page}</Wishlistlayout>
  )
}