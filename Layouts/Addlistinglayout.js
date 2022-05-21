import Addlisting from "../components/Addlisting";
import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";


const Homelayout = ({ children }) => {
  return (
    <>
      <NavBarWeb />
      <NavBarMobile />
      <Addlisting/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Homelayout;