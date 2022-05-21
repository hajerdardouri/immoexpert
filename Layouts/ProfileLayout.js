import Footer from "../components/Footer";
import Logout from "../components/Logout";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Profile from "../components/Profile";


const ProfileLayout = ({ children }) => {
  return (
    <>
      <NavBarMobile />
      <NavBarWeb />
      <Profile />
      <Logout />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
