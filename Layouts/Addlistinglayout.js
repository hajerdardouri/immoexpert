import Addlisting from "../components/Addlisting";
import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Profile from "../components/Profile";
import Signin from "../components/Signin";
import Signup from "../components/signup";


const Homelayout = ({ children }) => {
  return (
    <>
      <NavBarWeb />
      <NavBarMobile />
      <Signin />
      <Signup />
      <Addlisting/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Homelayout;