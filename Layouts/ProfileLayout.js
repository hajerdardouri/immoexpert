import Addlisting from "../components/Addlisting";
import Footer from "../components/Footer";
import Logout from "../components/Logout";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Profile from "../components/Profile";
import Signin from "../components/Signin";
import Signup from "../components/signup";


const ProfileLayout = ({ children }) => {
  return (
    <>
      <NavBarMobile />
      <NavBarWeb />
      <Signin />
      <Signup />
      <Profile />
      <Logout />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default ProfileLayout;
