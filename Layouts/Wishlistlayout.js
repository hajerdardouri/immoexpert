import Footer from "../components/Footer";
import Loved from "../components/Loved";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Product from "../components/Product";
import Signin from "../components/Signin";

const Wishlistlayout = ({children}) => {
    return ( <>
    <NavBarMobile />
    <NavBarWeb />
    <Signin />
    <Loved />
    <Product />
    <main>{children}</main>
    <Footer />
    </> );
}
 
export default Wishlistlayout;