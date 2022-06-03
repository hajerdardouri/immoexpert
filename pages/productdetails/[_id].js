import Head from "next/head";
import ProductDetails from "../../components/ProductDetails";
import Productdetailslayout from "../../Layouts/Productdetailslayout";
export default function Profile() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Product Details</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Productdetailslayout>{page}</Productdetailslayout>;
};
