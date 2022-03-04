import Footer from "../components/Footer";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Sidebarprofile from "../components/Sidebarprofile";

const Profilelayout = ({children}) => {
    return ( <>
    <NavBarWeb />
    <NavBarMobile />
    <Sidebarprofile />
    <main>{children}</main>
    <Footer />
    </> );
}
 
export default Profilelayout;