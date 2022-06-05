import Footer from "../components/Footer";
import Loved from "../components/Loved";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Profile from "../pages/profile";

const Wishlistlayout = ({ children }) => {
  return (
    <>
      <NavBarMobile />
      <NavBarWeb />
      <Profile />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Wishlistlayout;
