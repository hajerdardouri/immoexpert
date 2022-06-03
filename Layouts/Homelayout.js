import Filter from "../components/Filter";
import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Product from "../components/Product";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Homelayout = ({ children }) => {
  return (
    <>
      <NavBarWeb />
      <NavBarMobile />
      <Signup />
      <Signin />
      <Filter />
      <Product />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Homelayout;
