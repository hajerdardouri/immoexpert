import Head from "next/head";
import ProfileLayout from "../Layouts/ProfileLayout";

export default function Profile() {
  return (
    <div>
      <Head>
        <title>ImmoExpert | Profile</title>
        <meta name="Keywords" content="pages" />
      </Head>
    </div>
  );
}

Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
