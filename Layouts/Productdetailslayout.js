import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import ProductDetails from "../components/ProductDetails";


const ProfileLayout = ({ children }) => {
  return (
    <>
      <NavBarMobile />
      <NavBarWeb />
      <ProductDetails />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
