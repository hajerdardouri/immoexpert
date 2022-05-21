import Head from "next/head";
import Addlistinglayout from "../Layouts/Addlistinglayout"
export default function Profile() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Add Listing</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
  );
}

Profile.getLayout = function getLayout(page) {
  return <Addlistinglayout>{page}</Addlistinglayout>;
};
