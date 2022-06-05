import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import ProductDetails from "../components/ProductDetails";
import Signin from "../components/Signin";
import Signup from "../components/Signup";



const Productdetailslayout = ({ children }) => {
  return (
    <>
      <NavBarMobile />
      <NavBarWeb />
      <Signin />
      <Signup />
      <ProductDetails />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Productdetailslayout;
