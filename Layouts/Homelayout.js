
import Filter from "../components/Filter";
import Footer from "../components/Footer"
import NavBarMobile from "../components/NavBarMobile";
import NavBarWeb from "../components/NavBarWeb";
import Product from "../components/Product";
import Search from "../components/Search";
import Signin from "../components/Signin";


const Homelayout =({children}) => {
    return (
        <>
            <NavBarWeb />
            <NavBarMobile />  
            <Signin />
            <Search />
            <Filter />
            <Product />
            <main>{children}</main> 
            <Footer  />
            
        </>
    );
}

export default Homelayout

