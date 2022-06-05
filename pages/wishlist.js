import Head from "next/head";
import Loved from "../components/Loved";
import Wishlistlayout from "../Layouts/wishlistlayout";

export default function Wishlist() {
  return <Loved />;
}

Wishlist.getLayout = function getLayout(page) {
  return <Wishlistlayout>{page}</Wishlistlayout>;
};
