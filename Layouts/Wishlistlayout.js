import Footer from "../components/Footer";
import Loved from "../components/Loved";
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Product from "../components/Product";

const Wishlistlayout = ({children}) => {
    return ( <>
    <NavBarMobile />
    <NavBarWeb />
    <Loved />
    <Product />
    <main>{children}</main>
    <Footer />
    </> );
}
 
export default Wishlistlayout;