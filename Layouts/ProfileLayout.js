import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Profile from "../pages/profile.js";

const ProfileLayout = ({ children }) => {
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

export default ProfileLayout;
